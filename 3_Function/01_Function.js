 // console.log("Function ");
//Higher Order Function ==> Function under of Function is called Higher Order Function 

 
const FirstArrowFunction = (num) => {
    return num ** 2;

}
// console.log(FirstArrowFunction(75));

function  FunctionUnderFirstFun(FirstArrowFunction,num) {
    return FirstArrowFunction(num) * num;

}
   console.log( FunctionUnderFirstFun(FirstArrowFunction,3));


  // Example of Higher Order Function 
function firstFunction(num1,num2) {
    return num1 * num2 ** 2;

}

    function SecondFunUnderFirstFun(firstFunction, num1,num2) {
        return firstFunction(num1,num2) * num1;

    }
    const FunctionResult = SecondFunUnderFirstFun(firstFunction,2,2)
    console.log(FunctionResult);


        /// Another Exmple 

function SayHello() {
    return () => {
        console.log("Hello Gnanmani College Learner Bhai ");
    }
 }
 const GuessValue = SayHello() ;
 console.log(GuessValue);
 GuessValue();


        // Higher Order Function 

function MyFirstFunction(num) {
    return num ** 2;

}
    function SecondFunUnderFirstFun(MyFirstFunction, num) {
            return MyFirstFunction(num) * num;
    }
   console.log(SecondFunUnderFirstFun(MyFirstFunction,4)); 

    // using Arrow Function 

const number1  = 4

const MyArrowFunction = (num2) => {
    return number1 * num2;

}
    const MySecondArrowFun = (MyArrowFunction, num2) => {
            return MyArrowFunction(number1) * num2
    }

   console.log( MySecondArrowFun(MyArrowFunction, 2));


        // Second Example 
    function NewFirst(n) {
        return n ** 2;
    }
        function NewSecondUnderNewFirst(NewFirst, n  ) {
            return NewFirst(n) * n;

        }
        console.log(NewSecondUnderNewFirst(NewFirst,3));

       
       

        const SayHelloFunction = () => {
            return () => {
                console.log("Hello PW Skills Learner");
            }
        }
      const SayResult =   SayHelloFunction()
      //  console.log(SayResult);
      SayResult()


     

      // Function Under of Function ==> inner Function 


      function HigherOrder(n) {
                function firstFunction(m) {
                            function SecondFunction (p) {
                                return n + p + m;
                            }
                           return SecondFunction()
                }
            return   firstFunction()
      }
    HigherOrder((10) (10) (10))
    
      

    // Another Method For Function 

    const FirstHigh = (n) => {
            const SecondHigh = (m) => {
                    const ThirdHigh = (p) => {
                        return n + m + p;
                    }
                    return ThirdHigh
            }
            return SecondHigh
    }
    console.log(FirstHigh(10)(10)(10));

    

    function FirstHighFunction(A) {
                function SecondHighFunction (B) {
                        function ThirdHighFunction(C) {
                                function ForthHighFunction (D) {
                                    return A + B + C + D;
                                }
                                return ForthHighFunction
                        }
                        return ThirdHighFunction
                }
                return SecondHighFunction
    }
   const ResultFor =  FirstHighFunction(100)(200)(100)(100)
   console.log(ResultFor);
  

   // Add the Under of Array Element value Count 

   const MyArray = [2,3,5,7,4,4];


   const SumArray = (Array) => {
    let total = 0;
    Array.forEach(element => {

         total += element
        
    });
    return total;

   }
   console.log(SumArray(MyArray)); 
   
   

   // Array ke under element ka Addition Find karna 

   const NewArry = [10,5,10,50,5,20]   // 100 Ans 

   function NewSumArray(array) {
        let TotalValue = 0; 
        array.forEach(function(element){
            TotalValue += element
        });
        return TotalValue;
   }
   console.log(NewSumArray(NewArry));
   
   

   // Use Of SetTimeInterval ==> under Two Parameter (functionName, timeDuration) ==> (rahul , 1000)

   function MyTimeFunction() {
    console.log("Gnanamani College of Technology, Namakkal ");
   }
   // setInterval(MyTimeFunction,200) // Continusally bar show karne ke liya 

   setTimeout(MyTimeFunction, 1000)  // only ek bar show karke function se exit kar gane
   // ke liye timeOut interval ka use kiya jata ha 
   