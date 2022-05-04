//Global variables
let currentSelection = '';
let previousSelection = '';
let currentOperator = undefined;
let previousOperator = undefined;
let total = undefined;

const currentOperand = document.querySelector('[data-current-operand]');
const previousOperand = document.querySelector('[data-previous-operand]');
const numberButtons = document.querySelectorAll('[data-number')
const operatorButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equal]')
const clearButton = document.querySelector('[data-clear]')
clearAll();

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        const input = button.textContent;
        appendNumber(input);
    });
});
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(previousSelection != '' && currentSelection != ''){
            previousSelection = operate();
            currentSelection = ''
            currentOperator = button.textContent;
            updateDisplay();
            return;
        }
        if(previousSelection != '' && currentSelection == ''){
            return;
        }
        currentOperator = button.textContent;
        if(previousSelection != ''){
             previousSelection = operate(currentOperator);
             updateDisplay();
             currentSelection = '';
             updateDisplay();
             return
        }
        previousSelection = currentSelection;
        currentSelection = '';

        updateDisplay();
    });
});
equalsButton.addEventListener('click', ()=>{
    if(currentSelection === '') return;
    if(previousSelection === '') return;
    if(currentSelection === "0" || previousSelection === "0" && currentOperator === "/"){
        currentSelection = "You can't divide by 0...";
        previousSelection = "'"
        updateDisplay();
        return;
    }
    currentSelection = operate().toString();
    previousSelection = '';
    updateDisplay();

});
clearButton.addEventListener('click', clearAll);


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
    return n2 / n1;
}
//#endregion

function operate(){
    const _currentSelection = parseFloat(currentSelection);
    const _previousSelection = parseFloat(previousSelection);
    let sum = 0;
    switch (currentOperator) {
        case "/":
            total = divide(_currentSelection, _previousSelection); 
            break;
        case "x":
            total = multiply(_currentSelection, _previousSelection); 
            break;
        case "-":
            total = subtract(_currentSelection, _previousSelection); 
            break;
        case "+":
            total = add(_currentSelection, _previousSelection); 
            break;
    }
    return Math.round(total * 1000) / 1000;
}

//Display which button user pressed

function appendNumber(_input){
    if(currentSelection.includes(".") && _input === ".") return;
    currentSelection += _input;
    updateDisplay();
}

function updateDisplay(){

    previousOperand.textContent = previousSelection;
    currentOperand.textContent = currentSelection;
}


function clearAll(){
    currentSelection = '';
    previousSelection = '';
    currentOperator = undefined;
    previousOperator = undefined;
    total = undefined;
    updateDisplay(currentSelection)

}