// callbacks Function ==> i will call back but siome time After

// callbackFunction ka matlab hota hai
//  JavaScript ke function ko  sequencelly Executed

// ++++++++++++++++++  function sequence ++++++++++++
/* 
function FirstFun() {
  console.log("Hello sir ");
}

function SecondFun() {
  console.log("Good Morning Sir ");
}

FirstFun();
SecondFun();


// jis function ko phale call kroge oo function phale Extcuted hoga

function MyFirstFun() {
  console.log("Hello Learners ");
}

function MySecond() {
  console.log("How are you Man ");
}

MySecond();
MyFirstFun();


// +++++++++++++++++++++++++++++++++++  Sequence Control +++++++++++++++++++++++++++++++++++

function MyCallBackFun(rohan) {
  console.log("Demo");
}

function ArgrumnetFunction(num1, num2, fun) {
  let sum = num1 + num2;
  fun(rohan);
}
ArgrumnetFunction(10, 20, MyCallBackFun);


// Another Function

const MyArray = [10, 12, 6, 7, 9, 5];

const postNumber = removeNegative(MyArray, (x) => x > 1);

function removeNegative(numbers, callbacks) {
  const MyArray = [];
  for (const x of numbers) {
    if (callbacks(x)) {
      MyArray.push(x);
    }
    console.log(MyArray);
  }
  return MyArray;
}

*/
