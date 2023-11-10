let displayContent = '';
let functionButtonClicked = 0;
let operationType = '';
let number1 = 0;
let number2 = 0;
let doIclearScreen = 0;
let doIwaitForInput = 0;
const numberButton = document.querySelectorAll('.numberButton');
numberButton.forEach(button => {
    button.addEventListener('click', (e) =>{
        pushToDisplay(e.target.id);
        numberButton.isClicked=1;
    })
})
numberButton.isClicked = 0;

const functionButton = document.querySelectorAll('.functionButton');
functionButton.forEach(button => {
    button.addEventListener('click', (e) =>{
        functionButtonClicked = 1;
        if(numberButton.isClicked)
        {
            number2 = parseFloat(display.textContent);
            numberButton.isClicked=0;
        }
        if(e.target.id==="="||number1!=0) {
            console.log(""+number1 +operationType+ number2);
            operate();
            doIclearScreen = 1;
        }
        else{
        number1 = parseFloat(display.textContent);
        operationType=e.target.id;
        }
        if(e.target.id!="=") operationType = e.target.id;
    })
})

const specialButton = document.querySelectorAll('.specialButton');
specialButton.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.id==='C') {
            display.textContent='0';
            number1 = 0;
            number2 = 0;
            operationType = '';
        }
        if(e.target.id==='R') {
            display.textContent='0';
            number1 = 0;
            number2 = 0;
            operationType = '';
        }
    })
})

const display = document.getElementById('display');
function pushToDisplay(item){
    if (doIclearScreen === 1) {
        display.textContent = '0';
        doIclearScreen = 0;
    }
    if (!functionButtonClicked){
    display.textContent = display.textContent ==='0'  ? item : display.textContent + item;
    }
    else{
    display.textContent = item;
    functionButtonClicked = 0;
    }
}

function operate(){
    switch(operationType){
        case '+':
            number1=number1 + parseFloat(number2);
            pushToDisplay(number1);
            break;
        case '-':
            number1 = number1 - parseFloat(number2);
            pushToDisplay(number1);
            
            break;
        case '*':
            number1 = number1 * parseFloat(number2);
            pushToDisplay(number1);
            break;
        case '/':
            number1 = number1 / parseFloat(number2);
            pushToDisplay(number1);
            break;
    
    }
    doIclearScreen = 1;
    doIwaitForInput = 1;
}


