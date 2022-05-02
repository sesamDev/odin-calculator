//Global variables
const operator = {
    "/": "divide",
    "X": "multiply",
    "-": "subtract",
    "+": "add",
}
let userInput = '';
let selectedOperator = null;
let key = '';


//Math operator functions
let operatorPressed = false;

function add(n1, n2){
    return n1 + n2;
}

function subtract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

function operate(key){
    switch (operator[key]) {
        case "divide":
            divide(firstNumEntered, secondNumEntered); 
            break;
        case "multiply":
            multiply(firstNumEntered, secondNumEntered); 
            break;
        case "subtract":
            subtract(firstNumEntered, secondNumEntered); 
            break;
        case "add":
            add(firstNumEntered, secondNumEntered); 
            break;
    }
}


//Display which button user pressed
const displayContent = document.querySelector('#display');
let firstNumEntered = 5; //Stores the first number entered before an operator is pressed.
let secondNumEntered = 2; //Stores the second number entered before an operator is pressed.

function populateDisplay(char){
    displayContent.textContent += char;
}

function storeInput(char){
    userInput += char;
}

function clear(){
    displayContent.textContent = '';
    userInput = '';
}

function chosenOperator(userInput){
    let inputArray = Array.from(userInput);
    const operator = inputArray.filter(item => item == 'X' || item == '+' || item == '-' || item == '/');
    return operator;
}

function inputStringToInt(input){
    let inputArray = Array.from(input);
    let indexOfOper = null;
    console.log(inputArray);

    inputArray.forEach((item) => { //Loops through every item in the array and finds the index of the operator.
        if(item == 'X' || item == '+' || item == '-' || item == '/'){
            return indexOfOper = inputArray.indexOf(item);
        };
    });

    let output1 = inputArray.slice(0,indexOfOper).join(""); //Slice out and join the numbers leading up to the oper.
    let output2 = inputArray.slice(indexOfOper+1).join(""); //Slice out and join the numbers from oper to end.

    return firstNumEntered = +output1, secondNumEntered = +output2;
};


//Add eventlistner to buttons.
const buttons = document.querySelectorAll('button');

//Button click function for event listener.
function clickButton(e = new Event()){
    let buttonClicked = e.target.innerText;
    if(buttonClicked == "C"){
        clear();
        return;
    }
    if(buttonClicked == "="){
        console.log(operate(buttonClicked));
    }
    populateDisplay(buttonClicked);
    storeInput(buttonClicked);
}
buttons.forEach(button => {
    button.addEventListener('click', clickButton);
})