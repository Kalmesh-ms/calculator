let firstNumArr = [];
let firstNumber;

let secondNumArr = [];
let secondNumber;


let operator;
let toggle = 'active';

const getNumbers = document.querySelectorAll('.num');


getNumbers.forEach((num)=> num.addEventListener('click',()=>{
    if (operator == 'add' && !toggle) {
        secondNumArr.push(num.textContent);
        secondNumber = parseFloat(secondNumArr.join(''));
        getDisplay.textContent = secondNumber
        console.log(`second_InGetNum : ${secondNumber}`)
    }
    if(toggle == 'active'){
        console.log(`${num.textContent}`)
        firstNumArr.push(num.textContent);
        firstNumber = parseFloat(firstNumArr.join(''))
        getDisplay.textContent = firstNumber
        console.log(`first_inGetNum: ${firstNumber}`)
    }
}))

// let operationsObj ={
//     addEquals : function (firstNumber , secondNumber){
//         return firstNumber + secondNumber
//     }
// }
const getDisplay = document.querySelector('.display > .current')

function display(string , bool){
    if(bool){
    getDisplay.textContent += string;
    }
    else {
        getDisplay.textContent = string;
    }
}


const addBtn = document.querySelector('#add')
const equalBtn = document.querySelector('#equal');

addBtn.addEventListener('click',(e)=>{
    operator = addBtn.id
    toggle = false;
    operation(operator , e)
    e.target.classList.add('active')
    console.log(`first_inAddBtn: ${firstNumber}`)
    console.log(`second_inADdBTn : ${secondNumber}`)
})


function operation(operator , e){
    if ( operator == "add"){
        display(`${firstNumber}+`)
    }
    if (operator == 'add' && e.target.classList.contains('active')){
        display(`${firstNumber}+`)
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
        console.log(`result : ${result}`)
        display(`${result}+`, false)
        firstNumber = result;
        console.log(`first_afterAddBtn: ${firstNumber}`)
        secondNumArr = [];
        secondNumber = 0;
        console.log(`second_afterADdBTn : ${secondNumber}`)
    }
}


