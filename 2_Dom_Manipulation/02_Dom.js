
// if we want to add the Content through the JavaScript 
// firstFall given the Element Name ==> document.createElement("tagName");


// AppendChild ==> Display per show karne ke liye 
let h1Tag = document.createElement("h1");
h1Tag.className='firstTag';
h1Tag.style.color ='red';
h1Tag.style.fontSize ='35px'
h1Tag.style.textAlign ='center'
// Ab itna karne ke bad hame display par kuch content show karana hoga ==> Element.textContent 

    // h1Tag.textContent='Hello Gnanamani College Student'; 

// but ye content web page me show nahi ho rha hi to hme ==> document.body.childAppend(variableName)
// Variable mens where you store the content 
 document.body.appendChild(h1Tag);

// Example Of AppendChild ==> Another Ex. 
 let ParaExample = document.createElement("p");
 ParaExample.id='para';
 ParaExample.style.color ='black'
 ParaExample.style.fontSize="25px"
//  ParaExample.textContent='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa pariatur, corporis, nam distinctio assumenda modi sequi quod vitae, repellendus sint eveniet inventore sunt ipsam! Assumenda ipsam sequi sint esse error!';
  document.body.appendChild(ParaExample);


 // remove => Display se Remove karne ke liye 
  let ulSelector = document.querySelector("ul");
  console.log(ulSelector);

  let liSec = document.querySelectorAll("li");
  console.log(liSec);

    for(list of liSec){
        ulSelector.removeChild(list)
    }
  

// Another Example of The removeChild 

 let DivElement = document.querySelector("div");
 DivElement.style.textAlign='center';
 console.log(DivElement);
 DivElement.style.color ='red';

 let ParaElement = document.querySelectorAll("p");
 console.log(ParaElement);

 for(list of ParaElement) {
    DivElement.removeChild(list)
 }

 
 









