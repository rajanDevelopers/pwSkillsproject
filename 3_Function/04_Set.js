/* 
// / set is the Object you can Stored the Unique Value
// Set() ==> Unique Value stroed ==> is Also Object
const Value = new Set([10, 12, 13, "hello"]);

// Method of the Set() ==> .add()
console.log(Value.add(100)); // ==> include the new value

// .delete() ==> delete the value ==> given the Boolean Value
console.log(Value.delete(5));

//.has() ==> return true or flase if value are exits from the array
console.log(Value.has(10));

// console.log(Value.clear());
// console.log(Value.add("Hello"));
console.log(Value.has("Hello".toLocaleLowerCase()));
console.log(Value.size);
console.log(Value.delete(13));
console.log(Value);

const VaribaleValue = [10, "Hello", 13, 52, 18];
const MyStudent = new Set(VaribaleValue);

console.log(MyStudent.size);
console.log(MyStudent.add("rajan"));

for (const MyNew of MyStudent.values()) {
  console.log(MyStudent);
}

const letter = new Set(["a", "b", "c", "d", "e"]);

letter.forEach(function (value) {
  text += value;
});
console.log(letter);


const SetA = new Set([1, 2, 3, 4]);
const SetB = new Set([2, 3]);
// console.log(element);
// console.log(SetB);

function union(SetA, SetB) {
  const _union = new Set(SetA);
  for (const elem of SetB) {
    _union.add(elem);
  }
  console.log(_union);
}
// console.log(union());

*/

const newValue = new Map();
// You can add the value in the newValue under using ==> .set()Method
// console.log(newValue.set("a", 1));
// console.log(newValue.set("b", 2));
// console.log(newValue.set("c", 3));
// console.log(newValue.get(a));

// Another Trick

newValue.get("a", 1);
newValue.get("b", 2);
newValue.get("c", 3);
newValue.get("d", 4);
newValue.get("e", 5);
// You can Access these Value
