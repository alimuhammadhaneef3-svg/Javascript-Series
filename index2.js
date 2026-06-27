let number1 = 12
let isLogedIn = true
let mom = 2021234543333333333333333n
let name =" Haneef"

let hfname;
let temp = null
console.log(typeof hfname);// we just initilize a variable so its undefined
console.log(typeof temp);// because its a null so its an object 
console.log(typeof mom); // biginit

let nname = "Ali";
console.log(`Hello ${mom}`);

console.log(`Jan ${name}`);

let id1 = Symbol ("id1")
let id2 = id1



console.log( id1===id2)

let desc = {
    name : "ali",
    ages : 20,
    health: "good"
}
let desc2 = {
    name : 23,
    ages : 20,
    health: "good"
}

desc2.name = 'ahmed'
desc.health = "bad"
console.log(desc.health)
console.log(desc2);

console.log(typeof desc)
console.log(desc);
 desc2 = desc

 console.log(desc2===desc)

 console.log(desc===desc2)


