//Global scope
/**Variables declared outside function are in  global scope,
 * values of these variables are accessible everywhere the code 
 */
var animal = 'Dog';
console.log(`Accessing animal globally ${animal}`)
function getAnimal(){
    console.log(`Accessing of animal form local scope ${animal}`)
}
getAnimal();

// Local Scope
/**Variables declared inside the function are  in local scope. As these variables are bound to the funciton and are also named function scoped
 * same variable can be used in different function as every function are bound to their own scope.
 * same variables declared inside each funciton are not equally visible  in each of them.
 * 
 */

//  function tools(){
//      var item1 = 'cutter'; 
//      console.log(`first item of tools is ${item1}`)
//      function 
//  }

var global = 'world'
console.log(global)
function sum(a, b){
    let additon = a + b;
    console.log(additon)
    console.log(global)
}
sum(6, 9)