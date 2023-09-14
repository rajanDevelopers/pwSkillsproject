console.log("Hii Anonymous Function ");

// Anonymouse Function ==> Those Function have no Any Name 
// Jis Function ke pass koi Name Nhi hota hi
// example of Anonymous Function 

 let x = function () {
    // console.log("Hello Learners for the javaScript");
    
}
x();

// Another Exaple for the Anonymous Function 

let vari = function(x1) {
    return x1*x1;
}

let resutl = (vari(5));
// console.log(resutl);

// ImmegetliInvoke Function 

(function Paramters() {
    console.log("Hello Immigetli_invoke Function");
    
})();


// Example 

(function(a,b) {
   // console.log(a+b);
})(10,5);



(function Immedi(num1,num2,num3) {
    // console.log(num1 + num2 + num3); 

})(10,10,20);


let Annomous = function(a1,b1) {
    return a1 * b1;
}
let resultAnnomousFunc = Annomous(10,10);
console.log(resultAnnomousFunc);