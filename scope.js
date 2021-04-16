// // global scope 

const { platform } = require("os");
const { get } = require("http");

// const { get } = require("http")

// var fruit = 'apple'
// console.log(`fruit is accessed outside function ${fruit}`)

// function getFruit(){
//     console.log(`Get fruit inside function ${fruit}`)
// }
// getFruit();

// // local scope

// /**
//  * Variables declared inside funcion are local scope 
//  */
// var ball = "volleyball"
//  //global scope 

// // local scope

// const name = "Kairm"
// console.log(name + ' avaliable outside the function scope')

// function getName(){
//     console.log(`${name} is accessible inside function scope`)


// }
// getName()

// //Block Statements
// //Block statements like if switch conditions for and while loop don't create new scope. Variables defined inside of a block statement will remain in the scope they were already in

// var kam = 'Sher Karim';

// let like = ['reading books', 'programming']
// const skills = ['Javascript, HTML CSS, BOOTSTRAP']

// if(true){
//     // this if conditional block dosen't create a scope

//     //kam is the global scope becouse of the var keyword 
//     var kam = 'Sher Karim'

//     //likes is the local scope becouse of the let keyword 

//     let like = ['reading books', 'programming'];

//     //skills is in the local scope becouse of the const keyword
//     const skills   = ['Javascript, HTML CSS, BOOTSTRAP']
// }

// console.log(kam)  //returns Sher Karim
// console.log(like)  //Uncaught ReferenceError: like is not defined.
// console.log(skills)  //Uncaught ReferenceError: skills is not defined. 

// //Context
// /**
//  Context is used to refer to the value of this in some particular part of your code.
//  */

// //  console.log(this);

// //  function logFunction(){
// //      console.log(this);
// //  }
// //  logFunction('This value ')

// class User {
//     logName(a,b){
//         let multiply = a * b;
//         console.log(this)
//         console.log(multiply)
//     }
// }

// (new User).logName(8, 8);

// function logFunction(){
//     console.log(this);
// }

// new logFunction('karim developer')



//lexical scope 
// function grandfather(){
//     var name = 'Mula Qurban'
// function parent(name, age, hobby){
//     this.name = name;
//     this.age = age;
//     this.hobb = hobby;
// }
// parent('Karim ali shah',74,'Traveling ')

// function child(num){
// }
// child(7)

// }


// Dev website

// What is scope?
/**Scope determines the visibility or accessibility of a variable or other resource in the area of your code. */

// Global Scope

/**There is one Global scope in javascript document. The area outside all the funciton is consider the global and variables defined inside the global scope can be accessed and altered in any other scopes. */

var Planguage = 'JavaScript'
console.log(`Programming Language is printed globally ${Planguage}`);

function getPlang(){
    console.log(`Programming language printed locally${Planguage}`);
}
getPlang('JavaScript')

/**Local Scope 
 * Variables declared inside the functions become Local scope to the funciton and are considered in the local scope. Every function has its own scope
 * same variables can be used in different functions becouse they are not mutual visble
*/

const student = 'sher karim';
console.log(`Global declaration ${student}`)

function getStudent(){
    console.log(`Local declaration ${student}`)
}
getStudent(student)

const name = Symbol("Sher Karim")
console.log(name === name[Symbol.toPrimitive]())
