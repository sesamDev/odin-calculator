//Global variables
const displayContent = document.querySelector('#display');
const operator = {
    "/": "divide",
    "x": "multiply",
    "-": "subtract",
    "+": "add",
}
let userInput = '';
let operatorSelected = null;
let operatorKey = '';
let total = 0;
let firstNumEntered = 5; //Stores the first number entered before an operator is pressed.
let secondNumEntered = 2; //Stores the second number entered before an operator is pressed.

//#region Basic math functions.
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
//#endregion

function operate(key){
    let chosenOperator = key;
    let sum = 0;
    switch (operator[chosenOperator]) {
        case "divide":
            sum = divide(firstNumEntered, secondNumEntered); 
            break;
        case "multiply":
            sum = multiply(firstNumEntered, secondNumEntered); 
            break;
        case "subtract":
            sum = subtract(firstNumEntered, secondNumEntered); 
            break;
        case "add":
            sum = add(firstNumEntered, secondNumEntered); 
            break;
    }
    return total = sum;
}


//Display which button user pressed

function populateDisplay(char){
    displayContent.textContent += char;
}

function storeInput(char){
    userInput += char;
}

function clearAll(){
    displayContent.textContent = '';
    userInput = '';
}

function clearDisplay(){
    displayContent.textContent = '';
}

function chosenOperator(userInput){
    let inputArray = Array.from(userInput);
    const operator = inputArray.filter(item => item == 'x' || item == '+' || item == '-' || item == '/');
    operator.join(""); //Make string from array;
    return operatorKey = operator;
}

function inputStringToInt(input){
    let inputArray = Array.from(input);
    let indexOfOper = null;
    console.log(inputArray);

    inputArray.forEach((item) => { //Loops through every item in the array and finds the index of the operator.
        if(item == 'x' || item == '+' || item == '-' || item == '/'){
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
    let btnClicked = e.target.innerText;
    if(btnClicked == "C"){
        clearAll();
        return;
    }
    if(btnClicked == "="){
        chosenOperator(userInput); //Find operator chosen.
        inputStringToInt(userInput); //Find first and second set of numbers
        console.log(operate(operatorKey)); //calculate based on above.
        clearAll();                    //Clear the display to only show sum;
        populateDisplay(total); //Show the sum on the display.
        return;
    }
    if(btnClicked == 'x' || btnClicked == '+' || btnClicked == '-' || btnClicked == '/'){
        operatorSelected = true;
        storeInput(btnClicked);
    }else if(operatorSelected){
        clearDisplay();
        populateDisplay(btnClicked);
        storeInput(btnClicked);
        operatorSelected = false;
    }else{
        populateDisplay(btnClicked);
        storeInput(btnClicked);
    }
    console.log(btnClicked != 'x' || btnClicked != '+' || btnClicked != '-' || btnClicked != '/')
}
buttons.forEach(button => {
    button.addEventListener('click', clickButton);
})