let firstNumArr = [];
let firstNumber;

let secondNumArr = [];
let secondNumber = 0;

let currNumber;

let operator;

const getNumbers = document.querySelectorAll('.num');


getNumbers.forEach((num)=> num.addEventListener('click',()=>{
    if (operator == 'add') {
        secondNumArr.push(num.textContent);
        secondNumber = parseInt(secondNumArr.join(''));
        getDisplay.textContent = secondNumber
        console.log(secondNumber)
    }else{
        firstNumArr.push(num.textContent);
        firstNumber = parseInt(firstNumArr.join(''))
        getDisplay.textContent = firstNumber
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
    operator = 'add'
    operation(operator , e)
    e.target.classList.toggle('active')
    console.log(`first: ${firstNumber}`)
    console.log(`second : ${secondNumber}`)
})


function operation(operator , e){
    if ( operator == "add"){
        display(`${firstNumber}+`)
    }
    if (operator == 'add' && e.target.classList.contains('active')){
        result = parseInt(firstNumber) + parseInt(secondNumber);
        console.log(result)
        display(`${result}`, false)
    }
}


