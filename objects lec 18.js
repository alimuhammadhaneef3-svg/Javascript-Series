const tinder = new Object() //singleton Object Constructor
const tinderUser ={} //not a singleton object its literal
console.log(typeof tinderUser);

tinderUser.id = "acb345"
tinderUser.name = "Haneef"
tinderUser.IslogedIn = true
console.log(tinderUser);


tinder.id = "acb345"
tinder.name = "Haneef"
tinder.IslogedIn = true

console.log(tinder);
 
const obj1 = { name : "ali", Class : 'A'};
 
const obj2 = { name1 : "Rehman", Class1 : 'B'};

const obj4 = { name3 : "Reheem", Class3 : 'D'};

const obj6= Object.assign({},obj1,obj2,obj3,obj4); //merge two objects
console.log(obj6);

const obj7= {...obj6,...obj4}//spread
console.log(obj7);

console.log(tinderUser);
console.log(Object.values(tinderUser));
 const entries =console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));



Object.fromEntries(tinderUser)


const obj = Object.create(null)
console.log(typeof obj);

let Department = {
    name : "IT",
    Teacher: "Amber",
    Instructor : "Admin"
}

const { name : na , Teacher : Th , Instructor : Is } = Department
console.log(na , Th, Is);

{
    "NAME": "Haneef",
    "class": "7B",
    "isLoggedIn": true
}

