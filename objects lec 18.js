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
const obj3 = { name2 : "Rehman", Class2 : 'C'};
const obj4 = { name3 : "Reheem", Class3 : 'D'};

const obj6= Object.assign({},obj1,obj2,obj3,obj4); //merge two objects
console.log(obj6);

const obj7= {...obj6,...obj4}//spread
console.log(obj7);

console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'));






