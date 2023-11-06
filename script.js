let displayContent = '';
let functionButtonClicked = 0;
let operationType = '';
let number1 = 0;


const numberButton = document.querySelectorAll('.numberButton');
numberButton.forEach(button => {
    button.addEventListener('click', (e) =>{
        console.log(e.target.id);
        pushToDisplay(e.target.id);
    })
})

const functionButton = document.querySelectorAll('.functionButton');
functionButton.forEach(button => {
    button.addEventListener('click', (e) =>{
        operationType = e.target.id;
        functionButtonClicked = 1;
        if(e.target.id === '='||number1!=0) {
            operate(number1, display, operationType);
        }
        else{
        number1 = parseFloat(display.textContent);
        }
        console.log("number 1: "+ number1);

    })
})

const specialButton = document.querySelectorAll('.specialButton');
specialButton.forEach(button => {
    button.addEventListener('click', (e) =>{
        console.log(e.target.id);
    })
})

const display = document.getElementById('display');
function pushToDisplay(item){
    if (!functionButtonClicked)
    display.textContent = display.textContent ==='0'  ? item : display.textContent + item;
    else{
    display.textContent = item;
    functionButtonClicked = 0;
    }
}

function operate(number1, display, operationType){
    console.log(operationType);
    switch(operationType){
        case '+':
            pushToDisplay(number1 + parseFloat(display.textContent));
            break;
        case '-':
            pushToDisplay(number1 - parseFloat(display.textContent));
            break;
        case '*':
            pushToDisplay(number1 * parseFloat(display.textContent));
            break;
        case '/':
            pushToDisplay(number1 / parseFloat(display.textContent));
            break;
    }

}


