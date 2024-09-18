
//? Functions:
//! Traditional Function
function nameOfunction(){
    console.log('This is a function declaration');  //? Output: This is a function declaration
}

nameOfunction()

//! Function Expression:
const sayHello = function(name){
    return 'Hello ' + name;
}

console.log(sayHello("Yaya"))  //? Output: Hello Yaya

//! Arrow function:
const add = (a, b) =>{ 
    console.log("This is my arrow function")
    return a + b;
};

console.log(add(10, 15))  //? Output: 25

//! Function with parameters and arguments:

function multiply(x, y){
    console.log("This is a function with parameters and arguments");
    console.log(x * y);
}

console.log(multiply(10, 5))  //? Output: 50

//?Scope:
//! Global Scope:
let globalVariable = "I am global"

function test(){
    console.log(globalVariable)
}

test()  //? Output: I am global
console.log(globalVariable)  //? Output: I am global

//! Local Scope:

function test1(){
    let localVariable = "I am local variable"
    console.log(localVariable)
}

test1()  //? Output: I am local variable
// console.log(localVariable)    //? Output:  Error: ReferenceError: localVariable is not defined


function myFunction(){
    var functionVariable = "I am scoped variable"

    if(true){
        var insideBlock = "I am inside block variable"
    }
    console.log(insideBlock)  //? Output: I am inside blovk variabl
    console.log(functionVariable) //? Output: 
}

myFunction()   //? Output: 

//? Hoisting
