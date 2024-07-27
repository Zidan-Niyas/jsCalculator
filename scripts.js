const numbers = document.querySelectorAll("#number");
const display = document.querySelector("input");
const operators = document.querySelectorAll("#operator");
const clear = document.querySelector(".clear")
const equals = document.querySelector(".equals");

let operatorClicked = false;
let firstNumber = '';
let secondNumber = '';
let operator = '';

operators.forEach(operator => {
    operator.addEventListener("click", (e) => {
        if(!operatorClicked) {
            display.value = display.value + ' ' + e.target.value + ' ';
            operator = e.target.value;
        }
        operatorClicked = true;
    })  
});


numbers.forEach(button => {
    button.addEventListener("click", (e) => {
        if(!operatorClicked){
            firstNumber += e.target.value;
            display.value = firstNumber;
        }
        else {
            secondNumber +=  e.target.value;
            display.value += e.target.value;
        }
    });
});

clear.addEventListener("click", () => {
    display.value = '';
    firstNumber = '';
    secondNumber = '';
    operatorClicked = false;
});


const add = (a, b) => {
    console.log(a + b);
};

const subtract = (a,b) => {
    console.log(a - b);
};

const multiply = (a,b) => {
    console.log(a * b);
};

const divide = (a, b) => {
    console.log(a / b);
};

const operate = (a, b, operator) => {
    switch(operator) {
        case "+": 
            add(a,b);
            break;
        case "-" :
            subtract(a,b);
            break;
        case "*" :
            multiply(a,b);
            break;
        case "/" :
            divide(a,b);
            break;
        default :
            console.log("Invalid Operator");
    }
}

equals.addEventListener("click", () => {
    console.log(`First Number : ${firstNumber}, Second Number : ${secondNumber}`);
    console.log(operator);
    operate(firstNumber, secondNumber, operator);
});
