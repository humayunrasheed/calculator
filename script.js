const add = function(num1,num2) {
	return num1+num2;
};
const subtract = function(num1,num2) {
	return num1-num2;
};
const multiply = function(num1,num2){
    return num1*num2;
};
const divide= function(num1,num2){
    return num1/num2;
};
let num1,num2;
let operator="";
const operate = function(num1,operator,num2){
  switch(operator){
    case '*':return multiply(num1,num2);
    case '+':return add(num1,num2);
    case '-':return subtract(num1,num2);
    case '/':return divide(num1,num2);
  }
};

const resultElement = document.getElementById("result");
const inputElement = document.getElementById("input");
resultElement.value="";
inputElement.value="";
const numberButtons = document.getElementsByClassName("number");
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function() {
    const number = this.textContent;
    inputElement.value += number;
    inputElement.textContent=inputElement.value;
  });
}
// Get all operator buttons
const operatorButtons = document.getElementsByClassName("operator");

// Add event listeners to operator buttons
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function() {
    const operator = this.textContent;
    inputElement.value += operator;
    inputElement.textContent=inputElement.value;
  });
}
const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function() {
  const inputArray = new Array(inputElement.value)
  resultElement.textContent=result(inputArray);
  inputElement.textContent=inputElement.value;
});
const dotButton = document.getElementById("dot");
dotButton.addEventListener("click", function() {
  if (!(inputElement.value.length > 0 && inputElement.value[inputElement.value.length - 1] === ".")) {
    if (inputElement.value.indexOf('.') === -1) {
      inputElement.value += ".";
    }
  }
  inputElement.textContent=inputElement.value;
});
const clear = document.getElementById('clear');
clear.addEventListener('click',function(){
    resultElement.value="0";
    inputElement.value="0";
    inputElement.textContent=inputElement.value;
    console.log(resultElement.value)
});
const del = document.getElementById('delete');
del.addEventListener('click',function(){
    if (inputElement.value.length === 0) {
      // If the string is empty, do nothing
    } else {
      // Convert the string to an array, remove the last element, and join back into a string
      const arr = inputElement.value.split('');
      arr.pop();
      inputElement.value = arr.join('');
    }
    inputElement.textContent=inputElement.value;
})
function result(value){
  
}