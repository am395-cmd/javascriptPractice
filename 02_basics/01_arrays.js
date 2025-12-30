//Arrays

const myArr = [0, 1, 2, 3, 4, 5, 6]

// const myHero = ["Quaid", "Allama Iqbal"]

// const myArr2 = new Array("a", "b", "c", "d")

// console.log(myHero[1]);

//Array Methods

myArr.push(7)
myArr.push(9)
myArr.push(15)
// myArr.pop()
// console.log(myArr);

myArr.unshift(15)          //adding in start position

// console.log(myArr);
// console.log(myArr.includes(6));         //check value include or not
// console.log(myArr.indexOf(3));           //check where is 

// const newMyArr = myArr.join()

// console.log(myArr);
// console.log(typeof newMyArr);
// console.log(newMyArr);

console.log("Array A:", myArr);
const numArry1 = myArr.slice(0,3)

console.log(numArry1);


console.log("Array B:", myArr);
const numArry2 = myArr.splice(1,3)

console.log(numArry2);
console.log("Array C:", myArr);