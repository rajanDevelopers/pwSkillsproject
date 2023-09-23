// // Dom part 3 

let TagH1 = document.getElementById("h1");
TagH1.textContent = 'Gnanamani College OF Technology, Namakkal'
TagH1.style.fontSize = '25px'
TagH1.style.color = 'purple'
TagH1.style.textAlign ='center'
TagH1.style.justifyContent ='center';

// User the EventListner

document.addEventListener("click", 
    function EventFunction() {
         document.getElementById("h1").innerText ='Hello Dear Student How are you ';
    
})



let ButtonVariable = document.getElementById("btn").innerText ="submit"
ButtonVariable.style.textAlign = 'center'
ButtonVariable.style.textContent ='center'


document.addEventListener("click", function ButtonFn() {
    document.getElementById("btn").innerText ='Hello Bro What are you Doing Now '
})


document.addEventListener("click", 
    function paragraphTag () {
        document.getElementById("Lorem").innerText ='Hello Gnanamani College of technology'
       

})