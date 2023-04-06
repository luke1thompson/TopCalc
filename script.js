let setNum = '';
let workingNum = '0';
let operator = '';
const display = document.querySelector("#display");

function operate(a, op, b) {
    let output;
    a = parseFloat(a);
    b = parseFloat(b);
    switch (op) {
        case '+':
            output = a + b;
            break;
        case '-':
            output = a - b;
            break;
        case '*':
            output = a * b;
            break;
        case '/':
            output = a / b;
            break;
    }
    return output.toString();
}

function post(value) {
    if (value.length > 11) {
        if (value[0] == '-') {
            value = value.slice(0, 11);
            // If the number is negative, the '-' shouldn't count towards
            // the character limit
        } else {
            value = value.slice(0, 10);
        }
    }

    display.textContent = value;
}

function update(e) {
    if (operator == '=') {
        clear();
        // Prevents the user from adding characters to the output after using
        // the '=' key
    }

    if (e.target.id == '.') {
        if (workingNum.indexOf('.') > -1) {
            return;
        }
        workingNum += '.';
    } else if (workingNum == '0') {
        workingNum = e.target.id;
    } else {
        workingNum += e.target.id;
    }
    post(workingNum);
}

function setOperator(e) {
    if (!setNum) {
        setNum = workingNum;
        workingNum = '0';
    } else {
        console.log(`setNum is ${setNum} and working is ${workingNum}`);
        setNum = operate(setNum, operator, workingNum);
        post(setNum);
        workingNum = 0;
    }

    operator = e.target.id;
}

function functions(e) {
    switch (e.target.id) {
        case '=':
            equals();
            break;
        case 'clear':
            clear();
            break;
        case 'sign':
            if (workingNum[0] == '-') {
                workingNum = workingNum.slice(1);
            } else {
                workingNum = '-' + workingNum;
            }
            post(workingNum);
            break;
        case 'percent':
            workingNum /= 100;
            post(workingNum);
            break;
    }
}

function equals() {
    if (!operator || operator == '=') {
        return;
    }

    workingNum = operate(setNum, operator, workingNum);
    setNum = '';
    operator = '=';
    post(workingNum);
}

function clear() {
    setNum = '';
    workingNum = '0';
    operator = '';
    post(workingNum);
}

const numButtons = document.querySelectorAll('.num');
numButtons.forEach(button => button.addEventListener('click', update));

const opButtons = document.querySelectorAll('.operator');
opButtons.forEach(button => button.addEventListener('click', setOperator));

const funButtons = document.querySelectorAll('.function');
funButtons.forEach(button => button.addEventListener('click', functions));