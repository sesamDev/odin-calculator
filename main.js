//Math operator functions
function add(n1, n2){
    return n1 + n2;
}

function subract(n1, n2){
    return n1 - n2;
}

function multiply(n1, n2){
    return n1 * n2;
}

function divide(n1, n2){
    return n1 / n2;
}

function operate(operator, n1, n2){
    return operator(n1, n2);
}

//Display which button user pressed
const displayContent = document.querySelector('#display');
function populateDisplay(char){
    displayContent.textContent += char;
}

//Add eventlistner to buttons.
const buttons = document.querySelectorAll('button');

//Button click function for event listener.
function clickButton(e = new Event()){
    populateDisplay(+e.target.innerText);
}
buttons.forEach(button => {
    button.addEventListener('click', clickButton);
})