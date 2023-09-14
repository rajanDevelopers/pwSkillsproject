console.log("Object Method in JavaSrcipt");

// Object Method 

function NewObject(i,n,s,c) {
    this.id = i;
    this.name = n;
    this.salary = s;
    this.city = c;

}

let NewObjectValue =new NewObject(102,'Sanket Shing',12000,'patna');
// console.table(NewObjectValue);


//Object Declaration 

let Studnt = {
    name :'RajanKumar',
    id: 109,
    city: 'patna',
    salary: 25000
}
// console.log(Studnt);


// Fetch the Object keys 

 let keys=Object.keys(Studnt);
 // console.log(keys);


 // fetch the value in Object 

  let value = Object.values(Studnt);
    // console.table(value);

  // when Access the Keys and Value Aslo in Object 

  let Entries = Object.entries(Studnt);
  // console.log(Entries);

  // update the value in Object 
  Studnt['city'] = 'Chennai'; 
 // console.log(Studnt);

  // Adding the extra value in Object 
  Studnt.age = 25;
 //  console.log(Studnt);

  // delete the method in Object 

  delete Studnt.age;
  // console.log(Studnt);

  // Value ko nhi change karne denta hai to Object me method 
  // Not include the Extra value in Object Under 
  Object.freeze(Studnt);
Studnt.age = 35;
  // console.log(Studnt);
  
  // include the value extra in 

  // Update Allow ke liye in Object not include in New Value 
  Object.seal(Studnt);
  Studnt.salary = 105;
  // console.log(Studnt);

  // when Object me new Object assign karna ho to 

  let StudntValue = Object.assign({Add:'Amour'}, Studnt);
  console.log(StudntValue);

 








