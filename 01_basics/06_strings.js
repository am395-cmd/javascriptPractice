const name = "Pakistan"
const age = 1947

// console.log(name + age + " Independence year");

console.log(`Hello this ${age} is ${name} independence day.`);

const userName = new String("Punjab")

console.log(userName[4]);
console.log(userName.__proto__);

console.log(userName.length);
console.log(userName.toUpperCase()); //proto methods

console.log(userName.charAt(2));           //check the character on that position
console.log(userName.indexOf('n'));           //check the character where it is

const newString = userName.substring(0, 4);            //string slicing no negative value
console.log(newString);

const anotherString = userName.slice(-6, 3);                 //slicing with negative value
console.log(anotherString);

const stringOne = "       Pakistan         "
console.log(stringOne);
console.log(stringOne.trim());

const webUrl = "https://www.youtube.com/results?search_query=programming+fundamentals"
console.log(webUrl.replace('results?', 'answers/'));           //replace any url's part

console.log(webUrl.includes('google'));           //check any word  

const gameName = new String('Pakista-Punjab-Islamabad')
console.log(gameName.split('-'));
