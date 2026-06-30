const name = "Rehman"
const email = "ali@gmail.com"
console.log(`my name is ${name} and email is ${email} containing value NULL`);

const gamename =new String('Hello Hnaif')
console.log(typeof gamename);

console.log(gamename[2]);


console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toLowerCase());
console.log(gamename.charAt(8));
console.log(gamename.indexOf('n'));
console.log(gamename.substring(0,8));

const newstring= gamename.substring(0,4) 

console.log(newstring);

console.log(gamename.slice(-7,-3));
newstringone= "  DON    "
console.log(newstringone);
console.log(newstringone.trim());

console.log(newstringone.replace('O','t'));


const url = 'https:/hanif.com/hanif!10khan'
console.log(url.replace('!10', "_"));
console.log(url.includes('haniif'));

let text="I am Fine today?"
console.log(text.endsWith('today?'));

// console.log(gamename.split('\'));

const arrayis = text.split(" ");
console.log(arrayis)
let city = "Pakistan"
console.log(city.split (3,4));

console.log(city.split(""));
console.log(city.length);
console.log(city.indexOf("i"));




console.log("Pakistan".split("").join(" /"));

console.log("Hello".split(""));
let arrays=[" Java" ,"Script"]
console.log(arrays.join(''));
let otp = "25";
console.log(otp.padStart(4,"0"));

let otp1 = '90';
console.log(otp1.padEnd(7,"5"));

let text1="Haneef"
console.log(Array.from(text1));
