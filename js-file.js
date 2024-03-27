

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

let buttonBox = document.querySelector(".buttonBox")
//buttonBox.appendChild(newButtons)

let allOperationString = ["÷","CE",")","(","√x","×",9,8,7,"xʸ","-",6,5,4,"10ʸ","+",3,2,1,"log", "=",".",0,"+/-","ln"]

   


let counter = ((allOperationString.length) - 1);
for (let ver = 0 ; ver < 5; ver++){
    let newDiv = document.createElement("div")

    for (let hori = 0; hori < 5; hori++){  
        let newButtons = document.createElement('button')
        newButtons.classList.add("numberButton")
        newButtons.innerText = allOperationString[counter]
        newButtons.id = allOperationString[counter]
        counter--
        newDiv.appendChild(newButtons)
    }
    buttonBox.appendChild(newDiv)
}

let firstString = ""
let secondString = "0"

let innerDisplay1 = document.querySelector(".innerDisplay1")
let innerDisplay2 = document.querySelector(".innerDisplay2")



function clear(){
    firstString = ""
    secondString = "0"
    innerDisplay1.textContent = firstString
    innerDisplay2.textContent = secondString
}

let ce = document.querySelector("#CE")
ce.addEventListener('click',clear)