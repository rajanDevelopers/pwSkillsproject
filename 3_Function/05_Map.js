/* 
// Map() Method in JavaScript ==> Hold-keys Values and Order of the Keys

const newValue = new Map();

// You can add the value in the newValue under using ==> .set()Method
// console.log(newValue.set("a", 1));
// console.log(newValue.set("b", 2));
// console.log(newValue.set("c", 3));
// console.log(newValue.get(a));

// Another Trick ==> Variable.set()

newValue.set("a", 1);
newValue.set("b", 2);
newValue.set("c", 3);
newValue.set("d", 4);
newValue.set("e", 2);
// You can Access these Value using ==> Varibale.get('access keys')

console.log(newValue.get("a"));
console.log(newValue.get("e"));
//console.log(newValue.delete("c")); // delte() ==> Delete key value
//console.log(newValue.entries()); // Access the Key & value both

console.log(newValue.size);



// Classes and classes Instations

class Product {
  Name;
  Price;
  Rating;

  display() {
    console.log("Displaying the Content of those are Displayed ");
  }

  RatingFunction() {
    console.log("Give me Some Rating About My Product ");
  }
}
const ResultProduct = new Product();
console.log(ResultProduct);
ResultProduct.display();
ResultProduct.RatingFunction();


// try & Catch method ==> Error Hendleing by

try {
  console.log("Hello Sir How are you ");
  console.log(a);
  console.log("What is Your Name");

  const MyName = "Rajan Kumar ";
  console.log(MyNameerroe);
} catch {
  console.log("Yes I know Your Name ");
  console.log("Then How are you");
}
*/

class ManyProject {
  ProjectName = "Real-Time Life Cycle";
  ProjectMembers = ["Mohan", "Rajan", "pankaj", "Rampravesh"];
  ProjectGuide = "Ms. Sangita Kumari";

  DisplayFunction() {
    return `This About My Project ${this.ProjectName}, Members ${this.ProjectMembers}, `;
  }
}
