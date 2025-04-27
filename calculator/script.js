const calculatorDisplay = document.querySelector("#cal-screen");

function addNumber(numbers){
    calculatorDisplay.value += numbers;
}

function addOperator(operator){
    calculatorDisplay.value += operator;
}

function addEquals (){
    calculatorDisplay.value = eval(calculatorDisplay.value);
}

function clearScreen(){
    calculatorDisplay.value = " ";
}

function addPercent(percent){
    calculatorDisplay.value += percent;
}
function deleteLeft(){
    calculatorDisplay.value = calculatorDisplay.value.toString().slice(0, -1);
}

function addDecimalPoint(decimalPoint){
    calculatorDisplay.value += decimalPoint;
}
// using try and catc to return error when a user perform some form of mathetical errors
function addEquals(){
    try{
        if(calculatorDisplay.value.trim() === ''){
            calculatorDisplay.value = 0;
        }else{
            calculatorDisplay.value = eval(calculatorDisplay.value);
        }
        }catch(error){
            calculatorDisplay.value = "error";
        }
}  

