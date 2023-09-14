// Function with a parameter 

function displayMessage(MessageToBeDisplay) {
    return MessageToBeDisplay;
} 
 let PrintMessage = displayMessage("I am proud student for the pw skills");

 // console.log(PrintMessage);


 // Argument always left to right flow karta hai 

 function add( x , y= 10) {
    return x + y;

 }
 let AddResult = add(10);
 //console.log(AddResult);


// function ke under multiple parameter de sakte hai 
// Acoording to user need 
//  function sumofTwonumber(num1, num2, num3) {
//     return num1 * num2 * num3;


//  }
//  let regultSumToNumber = sumofTwonumber(2,3,2);
//  console.log(regultSumToNumber);

//  function ArryNumber([n,p]){
//     return n,p;
//  }
//  let printArrayNumber = ArryNumber([10,5]);
//  console.log(printArrayNumber);


        // Function with an unlimited number of parameters and Argument 

// Function Declartion 

function sumOfAllParameters() {
    let sum = 0; 
    for (let i = 0; i< arguments.length; i++)
    sum += arguments[i];
return sum;

}

let result = sumOfAllParameters(1,2,3,4,5)
console.log(result);