const getDisplayLog = document.querySelector('.display > .log')
const getDisplayCurr = document.querySelector('.display > .current')
const operationBtns = document.querySelectorAll('.operator');
const dotButton = document.querySelector('#dot')
const getNumbers = document.querySelectorAll('.num');
const getACBtn = document.querySelector('#ac');
const getCBtn = document.querySelector('#del')
const getToggleSignBtn = document.querySelector('#toggleSign')
const keys = document.querySelectorAll('button')

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


window.addEventListener('keydown', (e)=>{
    const key = document.querySelector(`.num[data-key="${e.keyCode}"]`)
    if (!key)return;
    key.classList.add('clicked')
    playSound();
    if (!toggle){
        currentNumArr.push(key.textContent);
        currentNumber = parseFloat(currentNumArr.join(''));
        displayCurr(`${currentNumber}`);
    }
    if(toggle){
        firstNumArr.push(key.textContent);
        firstNumber = parseFloat(firstNumArr.join(''))
        displayCurr(`${firstNumber}`);
    }
})

getNumbers.forEach((num)=> num.addEventListener('click',()=>{
    num.classList.add('clicked')
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

getToggleSignBtn.addEventListener('click',(e)=>{
    e.target.classList.add('clicked')
    if (firstNumber){
        firstNumber = -firstNumber;
        displayCurr(`${firstNumber}`);
    }
    if (currentNumber){
        currentNumber = -currentNumber;
        displayCurr(`${currentNumber}`);
    }
})

getCBtn.addEventListener('click',(e) => {
    e.target.classList.add('clicked')
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
    e.target.classList.add('clicked')
    if (operatorBtn.id == 'ac')return;
    if (operatorBtn.id == 'del')return;
    if ( operatorBtn.id == 'equal'){
        {displayLog('')
        displayCurr('')}
    };
    if (currentNumber && operatorBtn.id !== 'equal'){
        displayLog(`${currentNumber}${e.target.textContent}`, true);
        displayCurr("")
    }
    if(firstNumber && !currentNumber && operatorBtn.id !== 'equal'){
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
            
        if (!result){
            if (operator == 'exp'){
                displayLog(`${firstNumber}^`, false)
            }
            else {
                if ( operator == 'equal' ){
                    if (result == 0){displayCurr('0')}
                    else{
                    displayLog("Did you forgot Something...? ")
                    displayCurr(`Here..!`)
                    }
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
        
        

getACBtn.onclick = (e) => {
    e.target.classList.add('clicked')
    firstNumArr = [];
    firstNumber = null;
    currentNumArr = [];
    currentNumber = null;
    toggle = true;
    result = null;
    displayLog('')
    displayCurr('0')
}

function removeTransition(e){
    if(e.propertyName !== 'transform')return;
    this.classList.remove('clicked')
}

function playSound(){
    const audio = document.querySelector('audio');
    if(!audio)return;
    audio.currentTime = 0;
    audio.play();
}

keys.forEach((button)=>button.addEventListener('click' , playSound))
keys.forEach((button => button.addEventListener('transitionend' , removeTransition)))