let a = 10;
let b = 20;
// Sum
function Sum() {
  let c = a + b;
  console.log(c);
}
let c = Sum();

// Sub ;
function Sub() {
  let c1 = a - b;
  console.log(c1);
}
let c1 = Sub();

// Q1: Write a function called "addNumAer" that take two number Argument and return their sum. 'all the
//function Aefore it is declared to demontrate hoiting

function addNumber(num1, num2) {
  return num1 + num2;
}
let result = addNumber(10, 12);
console.log(result);

// Q2 :

function multipyNumbers(first, second) {
  return first * second;
}
let MultipleResult = multipyNumbers(10, 5);
console.log(MultipleResult);

// Q3:-
function sum(Two = 10, Three = 10, Sum = Two + Three) {
  return Sum;
}
let TwoValueResult = sum();
console.log(TwoValueResult);

function Q3Function(num3, num4) {
  var num3 = 10;
  var num4 = 15;
  return num3 + num4;
}
console.log(Q3Function());

// Another method k

function Q3FunctionVar(FirstA, FirstB) {
  var sum;
  sum = FirstA + FirstB;
  return sum;
}
const ResultValue = Q3FunctionVar(100, 150);
console.log(ResultValue);

// Q4 : Declare three variable,

{
  let FirstVar = 10;
  var SecondVar = 20;
  const ThirdVar = 50;
}
console.log(FirstVar);
console.log(SecondVar);
// Because it is assigned the galobaly
console.log(ThirdVar);

// Q5 :-
console.log(variable1);
{
  let variable1 = 10;

  console.log(variable1);
}
console.log(variable1);
