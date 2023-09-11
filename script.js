let firstNumArr = [];
let firstNumber;

let currentNumArr = [];
let currentNumber;

let toggle = true;

let result;



const getDisplayLog = document.querySelector('.display > .log')
const getDisplayCurr = document.querySelector('.display > .current')

const operationBtns = document.querySelectorAll('.operator');

let operator;
function displayLog(string , bool){
    if(bool){
        getDisplayLog.textContent += string;
    }
    else {
        getDisplayLog.textContent = string;
    }
}

// function displayCurrent (string , bool){};

const getNumbers = document.querySelectorAll('.num');


getNumbers.forEach((num)=> num.addEventListener('click',()=>{
    if (!toggle){
       {
            currentNumArr.push(num.textContent);
            currentNumber = parseFloat(currentNumArr.join(''));
            displayLog(`${currentNumber}`);
            console.log(`current_InGetNum : ${currentNumber}`)
        }
        }
    if(toggle){
        if (num.id ==  'dot' && block)onceDeciPoint(num , arr);
        else {
        console.log(`${num.textContent}`)
        firstNumArr.push(num.textContent);
        firstNumber = parseFloat(firstNumArr.join(''))
        displayLog(`${firstNumber}`);
        console.log(`first_inGetNum: ${firstNumber}`)
        }
    }
}))


function activeOperator (e , operationBtns){
    operationBtns.forEach((button)=> (button.classList.remove('active')));
    e.target.classList.add('active');
    console.log(`ACTIVATED : ${e.target.id} ${e.target.classList.value}`)
}

operationBtns.forEach(
    (operatorBtn)=> operatorBtn.addEventListener(('click'), 
    (e)=>{
        if (operatorBtn.id == 'ac')return;
        displayLog(`${firstNumber}${e.target.textContent}`)
        toggle = false;
        console.log(`first_inOperatorBtn: ${firstNumber}`)
            console.log(`current_inOperatorBTn : ${currentNumber}`)
            operation(operator , e);
            operator = e.target.id
            console.log(`${ e.target.id}`)
            activeOperator(e , operationBtns);
            console.log('operator is 2nd')
        }
    )
)
             
function operation(operator , e){
    console.log('func is first ')
    if (!currentNumber && currentNumber !== 0)  return;
    console.log(`GOT IT : ${e.target.id} ${e.target.classList.value}`)
    if (operator == 'add'){
        result = parseFloat(firstNumber) + parseFloat(currentNumber);
        firstNumber = result;
        console.log(`result : ${result}`)
        console.log(`first_afterAddBtn: ${firstNumber}`)
        console.log(`current_afterADdBTn : ${currentNumber}`)
    }
    if (operator == 'multi'){
        result = ((parseFloat(firstNumber))*(parseFloat(currentNumber)));
        firstNumber = result;
        console.log(`result : ${result}`)
        console.log(`first_afterMutliBtn: ${firstNumber}`)
        console.log(`current_afterMutliBTn : ${currentNumber}`)
    }
    if (operator == 'sub'){
        result = ((parseFloat(firstNumber))-(parseFloat(currentNumber)));
        firstNumber = result;
    }
    if (operator == 'divide'){
        {result = ((parseFloat(firstNumber))/(parseFloat(currentNumber)));
        firstNumber = result;
    }
    }
    if (operator == 'exp'){
        result = ((parseFloat(firstNumber))**(parseFloat(currentNumber)));
        firstNumber = result;
    }
    currentNumArr = [];
    currentNumber = null;
}

operationBtns.forEach(
    (operatorBtn)=> operatorBtn.addEventListener(('click'), 
        (e)=>{
            if (operatorBtn.id == 'ac')return;
        if (!result){
            if (operator == 'exp'){
                displayLog(`${firstNumber}^`, false)
            }
            else {
                if ( operator == 'equal'){
                    displayLog('Did You Know.. ')
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
                    if ( operator == 'equal' && result){
                        displayLog(`${result}`)
                        if ( !result ){
                            displayLog('* _ *')
                        }
                    }
                    else{
                        displayLog(`${result}${e.target.textContent}`, false)
                    }
                }
            }
        }
        ))
        
        
        
const getACBtn = document.querySelector('#ac');

getACBtn.onclick = () => {
    firstNumArr = [];
    firstNumber = null;
    currentNumArr = [];
    currentNumber = null;
    toggle = true;
    result = null;
    displayLog('')
}