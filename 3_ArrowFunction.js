// Arrow function ka use isliye karte hai jab Array Function me jab hamlog 
// Arrow Function ka use karte hai to very easy hota hai because useme 
// map, filter etc. Function exit karta hai 

// Arrow Function Syntax 

// 1. One parameters, and a single return statement 

const square = (x) => x * x; 
let printSquare = square(5);
// console.log(printSquare);


// 2. Multiple parameters, and a single return expression 
const sumOftwoNumbers = (x,y) => x + y;
let PrintOfsumOftwoNumbers =sumOftwoNumbers(10,20);
console.log(PrintOfsumOftwoNumbers);


// 3. three parametrs, and a singel reterun expression 

let ThreeValueExpression = (x,y,z) => (x + y + z); 
let PrintOfThreeValueExpression = ThreeValueExpression(100,100,300);
console.log(PrintOfThreeValueExpression);


// 4. returing an object 
const sumOfAdditon = (x,y) => ({sum: x+y, difference: x-y, multiple: x*y});
let PrintSumOfAddition = sumOfAdditon(10,5);
console.log(PrintSumOfAddition);


// multiple statements in function expression 
const sum = (a,b) => {
    console.log(`Adding x = ${a} and y = ${b}`);
    return a + b;

}
let PrintSum = sum(100,100);
console.log(PrintSum);




