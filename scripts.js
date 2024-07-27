const numbers = document.querySelectorAll("#number");
const display = document.querySelector("input");
const operators = document.querySelectorAll("#operator");
const clear = document.querySelector(".clear")
const equals = document.querySelector(".equals");
const del = document.querySelector(".delete");

let operatorClicked = false;
let firstVar = false;
let secondVar = false;
let firstNumber = '';
let secondNumber = '';
let op = '';
let ans = '';
let numOfOperators = 0;
let currentNum = '';
let displayedValue = '';

operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        numOfOperators++;
        if(!operatorClicked) {
            display.value = display.value + ' ' + e.target.value + ' ';
            op = e.target.value;
            operatorClicked = true;
        }
        else if(secondVar == true && numOfOperators >= 2){
            ans = operate(parseInt(firstNumber),parseInt(secondNumber),op);
            updateDisplay(ans);
            op = e.target.value;
            display.value = display.value + ' ' + e.target.value + ' ';
        }
    })  
});


numbers.forEach(button => {
    button.addEventListener("click", (e) => {
        if(!operatorClicked){
            firstNumber += e.target.value;
            display.value = firstNumber;
            firstVar = true;
        }
        else {
            secondNumber +=  e.target.value;
            display.value += e.target.value;
            secondVar = true;
            displayedValue = display.value;
        }
    });
});

clear.addEventListener("click", () => {
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    numOfOperators = 0;
    operatorClicked = false;
});


const add = (a, b) => {
    return a + b;
};

const subtract = (a,b) => {
    return a - b;
};

const multiply = (a,b) => {
    return a * b;

};

const divide = (a, b) => {
    if(b == 0){
        return "lol";
    }
    else {
        return a / b;
    }
};

const operate = (a, b, operator) => {
    switch(operator) {
        case '+': 
            return add(a,b);
        case '-' :
            return subtract(a,b);
        case '*' :
            return multiply(a,b);
        case '/' :
            return divide(a,b);
        default :
            console.log("Invalid Operator");
    }
}

equals.addEventListener("click", () => {
    ans = operate(parseInt(firstNumber), parseInt(secondNumber), op);
    display.value = ans;
    operatorClicked = false;
    firstNumber = ans;
    secondNumber = '';
});

const updateDisplay = (ans) => {
    display.value = ans;
    firstNumber = ans;
    secondNumber = '';
}

del.addEventListener("click", () => {
    if(!secondVar && !operatorClicked) {
        let first = firstNumber.toString();
        firstNumber = first.slice(0, -1);
        display.value = firstNumber;
    }
    else if(!secondVar && operatorClicked) {
        display.value = display.value.slice(0,-3);
        op = '';
        operatorClicked = false;
    }
    else if(secondNumber != '') {
        let second = secondNumber.toString();
        secondNumber = second.slice(0,-1);
        display.value = displayedValue.slice(0,-1);
        displayedValue = display.value;
        if(secondNumber == '' ) {
            secondVar = false;
        }
    }
});