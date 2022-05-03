//Global variables

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
let numberInput = 0;
let firstNumEntered = 0; //Stores the first number entered before an operator is pressed.
let secondNumEntered = 0; //Stores the second number entered before an operator is pressed.
let previousTotal = 0;

const displayContent = document.querySelector('#display');
const numberButtons = document.querySelectorAll('.button.number')
const operatorButtons = document.querySelectorAll('button.operator')
const equalsButton = document.querySelector('button.equal')
const clearButton = document.querySelector('button.clear')
const pointButton = document.querySelector('pointBtn')

numberButtons.forEach(button => {
    button.addEventListener('click', clickNumberBtn);
});
operatorButtons.forEach(button => {
    button.addEventListener('click', clickOperatorBtn);
});
equalsButton.addEventListener('click', clickEqualsBtn);
clearButton.addEventListener('click', clearAll);
//pointButton.addEventListener('click', clickPointBtn);

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
    if(n1 == 0 || n2 == 0){
        return "Error, idiot..."
    }else return n1 / n2;
}
//#endregion

function operate(key){
    let chosenOperator = key;
    let sum = 0;
    switch (chosenOperator) {
        case "/":
            sum = divide(firstNumEntered, secondNumEntered); 
            break;
        case "x":
            sum = multiply(firstNumEntered, secondNumEntered); 
            break;
        case "-":
            sum = subtract(firstNumEntered, secondNumEntered); 
            break;
        case "+":
            sum = add(firstNumEntered, secondNumEntered); 
            break;
    }
    return total = sum;
}

//Display which button user pressed

function populateDisplay(char){
    displayContent.textContent += char;
    console.log({firstNumEntered})
    console.log({secondNumEntered})
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

function clickNumberBtn(e=new Event()){
    const btn = e.target.textContent;
    populateDisplay(btn);
    userInput += btn;
    if(operatorSelected){
        clearDisplay();
        populateDisplay(btn);
        operatorSelected = false;
    }
}

function clickOperatorBtn(e=new Event()){
    const btn = e.target.textContent;
    if(firstNumEntered != 0){
        firstNumEntered = total;
    }
    firstNumEntered = stringToInt(userInput);
    //secondNumEntered = stringToInt(userInput.substring(firstNumEntered))
    operatorSelected = true;
    operatorKey = btn;

    }
}

function clickEqualsBtn(e=new Event()){
    const btn = e.target.textContent;
    secondNumEntered = stringToInt(userInput.substring(firstNumEntered.toString().length))
    operate(operatorKey);
    clearDisplay();
    populateDisplay(total);
    userInput = '';
}

function stringToInt(input){
    return Number(input);
    // let inputArray = Array.from(input);
    // let indexOfOper = null;
    // console.log(inputArray);

    // inputArray.forEach((item) => { //Loops through every item in the array and finds the index of the operator.
    //     if(item == 'x' || item == '+' || item == '-' || item == '/'){
    //         return indexOfOper = inputArray.indexOf(item);
    //     };
    // });

    // let output1 = inputArray.slice(0,indexOfOper).join(""); //Slice out and join the numbers leading up to the oper.
    // let output2 = inputArray.slice(indexOfOper+1).join(""); //Slice out and join the numbers from oper to end.

    // return firstNumEntered = +output1, secondNumEntered = +output2;
};


//Add eventlistner to buttons.
// const buttons = document.querySelectorAll('button');

//Button click function for event listener.
// function clickButton(e = new Event()){
//     const btnClicked = e.target.innerText;
//     const btnClass = e.

//     // if(btnClicked == "C"){
//     //     clearAll();
//     //     return;
//     // }
//     // if(btnClicked == "="){
//     //     chosenOperator(userInput); //Find operator chosen.
//     //     inputStringToInt(userInput); //Find first and second set of numbers
//     //     console.log(operate(operatorKey)); //calculate based on above.
//     //     clearAll();                    //Clear the display to only show sum;
//     //     populateDisplay(total); //Show the sum on the display.
//     //     return;
//     // }
//     // if(btnClicked == 'x' || btnClicked == '+' || btnClicked == '-' || btnClicked == '/'){
//     //     operatorSelected = true;
//     //     storeInput(btnClicked);
//     // }else if(operatorSelected){
//     //     clearDisplay();
//     //     populateDisplay(btnClicked);
//     //     storeInput(btnClicked);
//     //     operatorSelected = false;
//     // }else{
//     //     populateDisplay(btnClicked);
//     //     storeInput(btnClicked);
//     // }
    
//     // btnClicked = null;

//     switch (btnClicked) {
//         case btnClicked === "C":
//             clearAll()
//             break;
//         case btnClicked === "=":
//             //Do something
//             break;
//         case btnClicked === 'x' || btnClicked === '+' || btnClicked === '-' || btnClicked === '/':
//             operatorSelected = true;
//             //Store the operator
//         case 
//         default:
//             break;
//     }


// }
