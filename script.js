const getDisplayLog = document.querySelector('.display > .log')
const getDisplayCurr = document.querySelector('.display > .current')
const operationBtns = document.querySelectorAll('.operator');
const dotButton = document.querySelector('#dot')
const getNumbers = document.querySelectorAll('.num');
const getACBtn = document.querySelector('#ac');
const getCBtn = document.querySelector('#del')

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

function clear(arr , num ){
    arr.pop();
    num =parseFloat( arr.join(''))
    console.log('popping')
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
    firstNumber = result;
    currentNumArr = [];
    currentNumber = null;
}
    
    
operationBtns.forEach(
    (operatorBtn)=> operatorBtn.addEventListener(('click'), 
    (e)=>{

    if (operatorBtn.id == 'ac')return;
    if (operatorBtn.id == 'del')return;
    if (currentNumber){
        displayLog(`${currentNumber}${e.target.textContent}`, true);
    }
    if(firstNumber && !currentNumber){
            displayLog(`${firstNumber}${e.target.textContent}`);
        }
        
        toggle = false;
        operation(operator);
        operator = e.target.id
        activeOperator(e , operationBtns);
    }
)
)
             

operationBtns.forEach(
    (operatorBtn)=> operatorBtn.addEventListener(('click'), 
        (e)=>{
            if (operatorBtn.id == 'ac')return;
            if (operatorBtn.id == 'del')return;
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