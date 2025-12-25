//number datatype
let score = 78

console.log(typeof(score));

//changing datatypes
let valueInNumber = Number(score);

//not a number data type
let runs = "36abc"

let valueInRuns = Number(runs);

console.log(typeof valueInRuns);
console.log(valueInRuns);

//null datatype
let goals = null

let changeGoal = Number(goals);

console.log(typeof changeGoal);

console.log(changeGoal);

// "33" => 33
//"33abc" => NaN (not a number)
//true => 1
//false => 0

let isLoggedIn = 1;

let boolIsLoggedIn = Boolean(isLoggedIn)
console.log(boolIsLoggedIn);

//1 => true
//0  => false
// "" =>false
//"Pakistan" => true

let numberSome = 45

let numberString = String(numberSome);

console.log(numberString);
console.log(typeof numberString);