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
        case "add": 
            add(a,b);
            break;
        case "subtract" :
            subtract(a,b);
            break;
        case "multiply" :
            multiply(a,b);
            break;
        case "divide" :
            divide(a,b);
            break;
        default :
            alert("Invalid Operator");
    }
}

operate(1,2,"multiply");