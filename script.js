const getDisplayLog = document.querySelector('.display > .log')
const getDisplayCurr = document.querySelector('.display > .current')
const operationBtns = document.querySelectorAll('.operator');
const dotButton = document.querySelector('#dot')
const getNumbers = document.querySelectorAll('.num');
const getACBtn = document.querySelector('#ac');
const getCBtn = document.querySelector('#del')
const getToggleSignBtn = document.querySelector('#toggleSign')

let firstNumArr = [];
let firstNumber;
let currentNumArr = [];
let currentNumber;
let toggle = true;
let result;
let operator;

displayCurr('0')

function displayLog(string , bool){
    if(bool){
        getDisplayLog.textContent += string;
    }
    else {
        getDisplayLog.textContent = string;
    }
}

function displayCurr (string , bool){
    if(bool){
        getDisplayCurr.textContent += string;
    }
    else {
        getDisplayCurr.textContent = string;
    }
};


function activeOperator (e , operationBtns){
    operationBtns.forEach((button)=> (button.classList.remove('active')));
    e.target.classList.add('active');
}

dotButton.onclick = () => (dotButton.disabled = true)

getNumbers.forEach((num)=> num.addEventListener('click',()=>{
    if (!toggle){
        currentNumArr.push(num.textContent);
        currentNumber = parseFloat(currentNumArr.join(''));
        displayCurr(`${currentNumber}`);
        }
        if(toggle){
            firstNumArr.push(num.textContent);
            firstNumber = parseFloat(firstNumArr.join(''))
            displayCurr(`${firstNumber}`);
        }
    }))

    
function operation(operator){
    if (!currentNumber && currentNumber !== 0)  return;
    if (operator == 'add'){
    result = parseFloat(firstNumber) + parseFloat(currentNumber);
}
if (operator == 'multi'){
    result = ((parseFloat(firstNumber))*(parseFloat(currentNumber)));
}
if (operator == 'sub'){
    result = ((parseFloat(firstNumber))-(parseFloat(currentNumber)));
}
if (operator == 'divide'){
    {result = ((parseFloat(firstNumber))/(parseFloat(currentNumber)));
}
}
if (operator == 'exp'){
    result = ((parseFloat(firstNumber))**(parseFloat(currentNumber)));
}
if (operator == 'percent'){
    result = ((parseFloat(firstNumber))/(parseFloat(currentNumber))*100);
}
firstNumber = result;
currentNumArr = [];
currentNumber = null;
}

getCBtn.addEventListener('click',() => {
    if (!toggle){
        currentNumArr.pop();
        currentNumber = parseFloat(currentNumArr.join(''));
        if(currentNumber){
            displayCurr(`${currentNumber}`);
        }
        else {
            displayCurr('0')
        }
        }
        if(toggle){
            firstNumArr.pop();
            firstNumber = parseFloat(firstNumArr.join(''))
            if(firstNumber){
                displayCurr(`${firstNumber}`);
            }
            else {
                displayCurr('0')
            }
        }
    }
)

operationBtns.forEach(
    (operatorBtn)=> operatorBtn.addEventListener(('click'), 
    (e)=>{

    if (operatorBtn.id == 'ac')return;
    if (operatorBtn.id == 'del')return;
    if (operatorBtn.id == 'toggleSign'){
        if(currentNumber){
            currentNumber = -currentNumber;
            displayCurr(`${currentNumber}`)
        }
        if(firstNumber){
            firstNumber = -firstNumber;
            displayCurr(`${firstNumber}`)
        }
    };
    if ( operatorBtn.id == 'equal'){
        {displayLog('')
        displayCurr('')}
    };
    if (currentNumber && operatorBtn.id !== 'equal'){
        console.log('its Here in 1')
        displayLog(`${currentNumber}${e.target.textContent}`, true);
        displayCurr("")
    }
    if(firstNumber && !currentNumber && operatorBtn.id !== 'equal'){
        console.log('its Here in 1')
            displayLog(`${firstNumber}${e.target.textContent}`);
            displayCurr("")
        }
        toggle = false;
        operation(operator);
        operator = e.target.id
        activeOperator(e , operationBtns);
    }
)
)
             
//DISPLAY
operationBtns.forEach(
    (operatorBtn)=> operatorBtn.addEventListener(('click'), 
        (e)=>{
            if (operatorBtn.id == 'ac')return;
            if (operatorBtn.id == 'del')return;
            if (operatorBtn.id = 'toggleSign')return;
        if (!result ){
            if (operator == 'exp'){
                displayLog(`${firstNumber}^`, false)
            }
            else {
                if ( operator == 'equal'){
                    displayLog("Hmmmmmm...")
                    displayCurr(`Interesting..!`)
                }
                else{
                displayLog(`${firstNumber}${e.target.textContent}`, false)
                }
            }
        }
        else{
            if (operator == 'exp'){
                displayLog(`${result}^`, false)
            }
            else{
                if ( !result ){
                    displayLog('* _ *')
                }
                    if ( operator == 'equal' && result){
                        displayCurr(`${result}`)
                    }
                    else{
                        displayCurr(`${result}`)
                    }
                }
            }
        }
)   )
        
        

getACBtn.onclick = () => {
    firstNumArr = [];
    firstNumber = null;
    currentNumArr = [];
    currentNumber = null;
    toggle = true;
    result = null;
    displayLog('')
    displayCurr('0')
}