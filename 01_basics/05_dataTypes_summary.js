//Data Types

//++++ 1. Primitive (call by value)
// 7 Types
// i. String    ii. number  iii. boolean    iv. null    v. undefined    vi. symbol  vii. bigInt

const score = 200; //Number 
const valueScore = 105.55 //Float

const isLoggedIn = false //boolean
const tempOut = null    //null
let userName; //undefined

let idUser = Symbol('456')
const anotherId = Symbol('456')

console.log(idUser === anotherId);


const bigNumbers = 3456789123456789n

console.log(typeof bigNumbers);



//++++ 2. Non-Primitive (Reference)
// 3 Types
//i. Array      ii. Objects     iii. Functions

const heros = ["Pak", "ASK", "SM"];

let myObject = {
    name: "Rawalpindi",
    Province: "Punjab"
}

const myFunction = function(){
    console.log("Hello Students");
}


