let firstNumArr = [];
let firstNumber;

let currentNumArr = [];
let currentNumber;

let toggle = true;

let result;

const getDisplay = document.querySelector('.display > .current')

const operationBtns = document.querySelectorAll('.operator');

let operator;
function display(string , bool){
    if(bool){
    getDisplay.textContent += string;
    }
    else {
        getDisplay.textContent = string;
    }
}

const getNumbers = document.querySelectorAll('.num');


getNumbers.forEach((num)=> num.addEventListener('click',()=>{
    if (!toggle){

            currentNumArr.push(num.textContent);
            currentNumber = parseFloat(currentNumArr.join(''));
            display(`${currentNumber}`);
            console.log(`current_InGetNum : ${currentNumber}`)
        }
    if(toggle){
        console.log(`${num.textContent}`)
        firstNumArr.push(num.textContent);
        firstNumber = parseFloat(firstNumArr.join(''))
        display(`${firstNumber}`);
        console.log(`first_inGetNum: ${firstNumber}`)
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
            display(`${firstNumber}${e.target.textContent}`)
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
        console.log(`result : ${result}`)
        // display(`${result}x`, false)
        firstNumber = result;
        console.log(`first_afterMutliBtn: ${firstNumber}`)
        console.log(`current_afterMutliBTn : ${currentNumber}`)
    }
    currentNumArr = [];
    currentNumber = null;
}

operationBtns.forEach(
    (operatorBtn)=> operatorBtn.addEventListener(('click'), 
        (e)=>{
            if (!result){
                display(`${firstNumber}${e.target.textContent}`, false)
            }
            else {display(`${result}${e.target.textContent}`, false)}
        }))