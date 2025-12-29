//+++++++++++++++++++++++ NUMBERS +++++++++++++++++++++++++++++

// const scores = 600

// console.log(typeof scores);

// const balance = new Number(200)
// console.log(balance);

// console.log(balance.toString().length);          //convert number to string and then check length
// console.log(balance.toFixed(2));                 // after decimal (point), fix the number of values like 200.00

// const newNumber = 456.7897
// console.log(newNumber.toPrecision(5));          //fix the whole value numbers like as 456.7897 convert to 456.79 mean total 5 digits

// const hundredsNumber = 100000000
// console.log(hundredsNumber.toLocaleString('en-PK'));

//+++++++++++++++++++++++ MATH +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-6));               //convert negative value into positive
// console.log(Math.round(7.6));            // convert whole number
// console.log(Math.ceil(4.2));            //top value of number 
// console.log(Math.floor(3.9));           //beneath value of number 
// console.log(Math.min(5, 3, 8, 15));             //find the minimum value
// console.log(Math.max(25, 15, 5, 8));       //find the maximum value


console.log(Math.random());         //always remain between 0 to 1
console.log(Math.random()*10 + 1);    //not recommended method
console.log((Math.random()*10)+1);    //recommended method

const min = 10
const max = 30
console.log(Math.floor(Math.random()*(max - min + 1)) + min); //random se 0 to 1 aay ga number phr range set krny k liye (max - min + 1) multiply kiya phr min add kr k usko minimum value pr set kiya
