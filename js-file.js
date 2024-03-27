

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
let allClasses = ["÷","CE","rightBraket","leftBracket","Radical","×","nine","eight","seven","power","-","six",
"five","four","tenPower","+","three","two","one","log", "=","point","zero","changeSign","ln"]

   


let counter = ((allOperationString.length) - 1);
for (let ver = 0 ; ver < 5; ver++){
    let newDiv = document.createElement("div")

    for (let hori = 0; hori < 5; hori++){  
        let newButtons = document.createElement('button')
        newButtons.classList.add("numberButton")
        newButtons.innerText = allOperationString[counter]
        if (["+","-","÷","×", "="].includes(allOperationString[counter])){
            switch (allOperationString[counter]){
                case "+":
                    newButtons.classList.add("plus")
                    break
                case "-":
                    newButtons.classList.add("minus")
                    break
                case "÷":
                    newButtons.classList.add("of")
                    break
                case "×":
                    newButtons.classList.add("multiply")
                    break
                case "=":
                    newButtons.classList.add("equals")
                    break
                default:
                    break

            }
            
        }
        else {
            newButtons.classList.add(allClasses[counter])
        }
        
        
        counter--
        newDiv.appendChild(newButtons)
    }
    buttonBox.appendChild(newDiv)
}



let innerDisplay1 = document.querySelector(".innerDisplay1")
let innerDisplay2 = document.querySelector(".innerDisplay2")

let firstString = innerDisplay1.textContent
let secondString = innerDisplay2.textContent

function clear(){
    firstString = ""
    secondString = "0"
    innerDisplay1.textContent = firstString
    innerDisplay2.textContent = secondString
}
function replaceAt(string, index, replacement) {
    return string.substr(0, index) + replacement + string.substr(index + replacement.length);
}
let ce = document.querySelector(".CE")
ce.addEventListener('click',clear)

let arr = ["+","-","÷","×","="] 
let arrNumber = [0,1,2,3,4,5,6,7,8,9] 
let classArray = ["zero","one","two","three","four","five","six","seven","eight","nine"]
arr.forEach(function (item){
    let core = ""
    switch (item){
        case "+":
            core = "plus"
            break
        case "-":
            core = "minus"
            break
        case "÷":
            core = "of"
            break
        case "×":
            core = "multiply"
            break
        case "=":
            core = "equals"
            break
        case 4:
            core = "four"
        default:
            break

    }
    core = "." + core;
    let operators = document.querySelector(core)
    operators.addEventListener('click',() => {
    console.log(firstString)
    
    console.log(firstString[firstString.length - 2])
    if (firstString[((firstString.length) - 2)] != "="){
        if (firstString.length == 0){
            console.log(firstString) 
            firstString += "0 " 
            firstString += operators.textContent
            firstString += "_"
        }
        else if (   ["+","-","÷","×"].includes(firstString[((firstString.length) - 2)])){
            if(   ["+","-","÷","×"].includes(operators.textContent)) {
                
                if (firstString[((firstString.length) - 2)] != operators.textContent) {

                    //firstString = replaceAt(firstString, ((firstString.length) - 2),(" "));
                    firstString = replaceAt(firstString, ((firstString.length) - 2),(operators.textContent));
                    
                        
                        
                        
                    }
            } 
            
        }
        else if (   ["="].includes(firstString[((firstString.length) - 2)])){
    
        }
        else {
            firstString += operators.textContent
            firstString += "_"
        }
    }
    
    innerDisplay1.textContent = firstString
})
})


 

classArray.forEach(function (item){

    let operand = document.querySelector("." + item)
    operand.addEventListener('click',() => {
        
        if(firstString.length == 0){
            firstString += operand.textContent 
            firstString += "_"
            
        }
        else if (   ["="].includes(firstString[((firstString.length) - 2)])){
    
        }   
        else{
            
            if ((arrNumber.includes(parseInt(operand.textContent))) && (arrNumber.includes(parseInt(firstString[firstString.length - 2] )))){
                
                firstString = firstString.substring(0,(firstString.length - 1))
                console.log(firstString)
                firstString += operand.textContent
                firstString += "_"
            }
            else{
                firstString += operand.textContent
                firstString += "_"
            }
            
            
        }
        console.log(firstString)
        innerDisplay1.textContent = firstString
        
    })
})