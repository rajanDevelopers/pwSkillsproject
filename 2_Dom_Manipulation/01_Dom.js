let clasNameVarible = document.getElementsByClassName("tech");
console.log(clasNameVarible[2].innerText);
clasNameVarible[2].innerText='Nodejs';
clasNameVarible[2].innerHTML = 'Radhe Radhe';



// TagName 

let TagnameVariable = document.getElementsByTagName("h4");
console.log(TagnameVariable.innerText);
TagnameVariable[1].innerText = 'RollNo';

TagnameVariable[0].style.color='red';
TagnameVariable[1].style.backgroundColor='yellow';
TagnameVariable[2].style.backgroundColor='orange';
TagnameVariable[2].style.color = 'red';

// QuerySelector 

// using tag in QuerySelector 
 let qurerVariabl = document.querySelector("h3");
 qurerVariabl.innerText= 'God';
 qurerVariabl.style.color ='blue';
 qurerVariabl.style.fontSize = '25px';

 // using class in QuerySelector 
  let queryClassVariable = document.querySelector('.classpri');
  queryClassVariable.style.color = 'pink';
  queryClassVariable.style.fontSize = '35px';

  // Using id in QuerySelector  
  let queryIDvariable = document.querySelector('#idvar');
  queryIDvariable.style.color ='orange';
  queryClassVariable.style.fontSize = '45px'

  // how to add the attribute in the tag under 
  queryIDvariable.setAttribute("title","Name");









