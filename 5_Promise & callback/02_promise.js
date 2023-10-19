// promise() ==> Promise is the Object. it is consuming the code & calls

// Syntax of Promise Object  ==> iske under first Function parameter hai

let PromiseVar = new Promise(function (reslove, reject) {
  reslove(); // when Successful
  reject(); // when error
});

PromiseVar.then(
  function (value) {
    /* code if Successful */
  },
  function (error) {
    /*code if some error */
  }
);
