const myname = "Yaya"
console.log(myname)  //? Output: Yaya

//! Data Type:
//? a)Primitives Types
//* Number: 
const wallet = 5000
//* String
const job = "Web developer"
//* Boolean
const is_active = true
//* Undefined
let myUndefinedVariable;
//* Null
let myNullableVariable = null
//? b) composites Types
//* Object
const myObjectVariable = {
    name: "John Doe",
    age: 30,
    company: "NEFEL EDUCATION"
}

//? Maipulating Object
//* Accessing Object Properties:
     //! Dot Notation:
     console.log(myObjectVariable.name)   //? Output: John Doe
     //! Bracket Notation:
     console.log(myObjectVariable["company"])  //? Output: NEFEL EDUCATION
     console.log("*****************************************************************************")
//! Note: Brackets is useful when the proiperty name is store in a variable or contains special characters.

//* Updating Object Properties:
myObjectVariable.name = "Slaheddine Iben Amor"
console.log(myObjectVariable)
console.log("*****************************************************************************")

//* Adding a new Property:
myObjectVariable.address = "Tunis"
console.log(myObjectVariable)   //? Output:
console.log("*****************************************************************************")
//* Removing properties:
delete myObjectVariable.company
console.log(myObjectVariable)   //? Output: { name: 'Slaheddine Iben Amor', age: 30, address: 'Tunis' }

//* Looping through an object:
      //! Introduction to Loop:
      //! for Loop:
      console.log("************************************************************************")
console.log("==========> This is the number from 0 to 4: ")
for (let i = 0; i <= 4; i++){
    console.log(i)   //? Output: 0 1 2 3 4
}

console.log("************************************************************************")
      //! for ... in loop:
const obj = {
    firstName: "Saif",
    lastName: "Khmis",
    email: "saif@gmail.com",
    password: "azerty1234"
}

for(key in obj){
    console.log(key, obj[key])
}

console.log("************************************************************************")

//! for ... of loop:
//* Array
const myArrayVariable = ["anana", "kiwi", "grape", "strawberry"]
const myArrayVariable1 = [1,2,3,4,5]

for(let value of myArrayVariable){
    console.log(value)
}

console.log("************************************************************************")

//* Accessing Array ELements:
console.log(myArrayVariable[0])  //? Output: anana
console.log("************************************************************************")
//* Updating Array ELements:
myArrayVariable[1] = "orange"
console.log(myArrayVariable)   //? Output: [ 'anana', 'orange', 'grape', 'strawberry' ]

console.log("************************************************************************")

//* Adding Elements:
//! Using push(): Adds elements to the end of the array
myArrayVariable.push("banana")
console.log(myArrayVariable)   //? Output: 
console.log("************************************************************************")

//! Using unshift(): Adds elements to the beginning of the array
myArrayVariable.unshift("rasberry")
console.log(myArrayVariable)
console.log("************************************************************************")

//* Removing Elements:
//! Using pop(): Removes the last element from the array
myArrayVariable.pop()
console.log(myArrayVariable)  //? Output: [ 'rasberry', 'anana', 'orange', 'grape', 'strawberry']
console.log("************************************************************************")
//!Using splice(): Removes elements from a specific position
myArrayVariable.splice(1,1)
console.log(myArrayVariable)   //? Output: [ 'rasberry', 'orange', 'grape', 'strawberry']
console.log("************************************************************************")

//! Using sort():
myArrayVariable.sort()
console.log(myArrayVariable) 
console.log("************************************************************************")
//! Variables:
//* 1st method (const)
const fullName = "Yaya DEMBELE"
console.log(fullName)   //? Output: Yaya DEMBELE
console.log("************************************************************************")
//* 2nd method (let):
let newfullName = "Khouloud Absi"
console.log(newfullName)  //? Output: Khouloud Absi
console.log("************************************************************************")
newfullName = "Saif"
console.log(newfullName)  //? Output: Khouloud Absi

// //* 3rd method (var):
var age = 30
age = 32