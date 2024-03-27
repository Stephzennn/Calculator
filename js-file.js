

function add(a, b){
    return a + b
}


function subtract(a ,b){
    return a - b
}


function multiply(a,b) {
    return a * b
}


function divide(a,b){
    return a/b
}

let leftNumber = 0;
let operator = "";
let rightNumber = 0;


function operate(a,string, b){
    
    switch(string){
        case "+":
            return add(a,b);
            
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            break
        
    }
    return undefined
}


console.log(operate(5,"-", 90))