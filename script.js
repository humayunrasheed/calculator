const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const multiply = function(num1, num2) {
  return num1 * num2;
};

const divide = function(num1, num2) {
  if (num2 === 0) {
    return "Invalid input";
  }
  return num1 / num2;
};

let num1 = 0;
let num2 = null;
let operator = null;

const operate = function() {
  switch (operator) {
    case '*':
      num1 = multiply(num1, num2);
      break;
    case '+':
      num1 = add(num1, num2);
      break;
    case '-':
      num1 = subtract(num1, num2);
      break;
    case '/':
      num1 = divide(num1, num2);
      break;
  }
};

const resultElement = document.getElementById("result");
const inputElement = document.getElementById("input");
resultElement.value = "";
inputElement.value = "";

const numberButtons = document.getElementsByClassName("number");
for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", function() {
    const number = this.textContent;
    inputElement.value += number;
    inputElement.textContent = inputElement.value;
    if (operator === null) {
      num1 = parseFloat(inputElement.value);
    } else {
      num2 = parseFloat(inputElement.value);
    }
  });
}

const operatorButtons = document.getElementsByClassName("operator");
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function() {
    if (num2 !== null) {
      operate();
    }
    operator = this.textContent;
    inputElement.value = "";
  });
}

const calculateButton = document.getElementById("calculate");
calculateButton.addEventListener("click", function() {
  if (num2 !== null) {
    operate();
    num2 = null;
    operator = null;
  }

  resultElement.textContent = num1;
  inputElement.value = num1;
});

const dotButton = document.getElementById("dot");
dotButton.addEventListener("click", function() {
  if (!(inputElement.value.length > 0 && inputElement.value[inputElement.value.length - 1] === ".")) {
    if (inputElement.value.indexOf('.') === -1) {
      inputElement.value += ".";
    }
  }
  inputElement.textContent = inputElement.value;
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
  resultElement.value = "0";
  inputElement.value = "0";
  inputElement.textContent = inputElement.value;
  num1 = 0;
  num2 = null;
  operator = null;
});

const deleteButton = document.getElementById('delete');
deleteButton.addEventListener('click', function() {
  if (inputElement.value.length === 0) {
    // If the string is empty, do nothing
  } else {
    // Convert the string to an array, remove the last element, and join back into a string
    const arr = inputElement.value.split('');
    arr.pop();
    inputElement.value = arr.join('');
  }
  inputElement.textContent = inputElement.value;
});
