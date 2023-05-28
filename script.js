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
const reminder=function(num1,num2){
    return num1%num2;
};
const sumArray = function(array) {
  let sum =0;
  for ( let i=0;i<array.length;i++){
    sum+=array[i];
  }
	return sum;
};

const multiplyArray = function(array) {
  let mul =1;
  for ( let i=0;i<array.length;i++){
    mul*=array[i];
  }
	return mul;
};

const power = function(num,val) {
  let ans=1;
  for (let i=0;i<val;i++){
    ans*=num;
  }
  return ans;	
};

const factorial = function(num) {
  let product = 1;
  if(num===0)return 1;
  
  else{
    for (let i=1;i<=num;i++){
      product*=i;
    }
    return product;
  }	
};
let num1,num2;
let operator="";
const operate = function(num1,operator,num2){
  switch(operator){
    case '*':return multiply(num1,num2);
    case '+':return add(num1,num2);
    case '-':return subtract(num1,num2);
    case '/':return divide(num1,num2);
    case '%':return reminder(num1,num2);
  }
};