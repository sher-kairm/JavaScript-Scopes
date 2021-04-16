const chalk = require('chalk');
// const express = require ('express');
// const { Server } = require('http');
// const app = express()

// app.get('/'),((req, res)=>{
//     res.send('Hello world!');
// })
// app.listen(3000, ()=>console.log('Server is ready'))

// process.on('SIGTERM',()=>{
//     Server.close(()=>{
//         console.log('Process terminated')
//     })
// })
// process.kill(process.pid, 'SIGTERM')

var arr = [2, 4, 6].forEach(num =>{
   console.log(num)
})
const args = process.argv.slice(2)

console.log('My name %s has %d years','cat',2 )

var name = 'karim';
var age = 22

console.log('My name is  %s and i am %d $ years old', 'karim', 22)


//console.count()

const even = [2,4,6,8,10]
const odd = [1,3,5,9,11]

console.count(`How much time is ${even} checked`);
console.count(`How much time is ${odd} checked`);

//consle.trace()

const runciton2 =()=>console.trace() 

//Calculate the time spent
 var fName = ((fname, lname)=>{
    fullName = fname + lname
    console.log(fullName)
});
fName('Sher Karim')
console.time(fName)
console.timeEnd(fName)

// color the output
console.log('\x1b[33m%s\x1b[0m', 'hi!')

console.log(chalk.yellow('REVOLUTION'))
console.log(chalk.bgBlue('DotAustere'))

