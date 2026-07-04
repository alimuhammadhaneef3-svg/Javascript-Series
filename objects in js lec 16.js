//singleton
const mysyb = Symbol('key1')
const Juser= {
    name: "Haneef",
    hmm(){
        console.log("I am Beayty");
        
    },
    "Fullname" : "HAneef Ali",
    [mysyb]: 'Here is Key',
    Email: 'alimuhamamd@gmail.com',
    Phone: 92312345672,
    IslogedIn: true,
    lastlogin :['mon', 'Wed', 'Fri']
}



Juser.greeting = function(){
    console.log("I am function");
}
console.log(Juser.greeting());
Juser.greetingTwo = function(){
    console.log(`I am function, ${this.name}`);
}
console.log(Juser.greetingTwo());

console.log(Object.keys(Juser));
console.log(Object.values(Juser));
console.log(Juser.hmm);
 
// console.log(Juser.IslogedIn);
// console.log(Juser['lastlogin']);
// console.log(Juser[mysyb]);
// console.log(typeof mysyb);
// console.log(Array.from(Juser.Email));
//function 






// Object.freeze(Juser)
// console.log(Juser.name = "rehman");
// console.log(Juser);



 





console.log(Juser['Fullname']);




