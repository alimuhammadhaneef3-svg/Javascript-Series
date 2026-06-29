const id= Symbol("id12")
const id3= Symbol("id12")

console.log(id==id3);

array= ["ali",'rehman','haneef']
console.log(array[array.length-1]);

myobj = {
    name : 'Haneef',
    age : 20,
    class : 4,
    Blood : 'A+'


}

console.log(myobj.name);
myobj.name = "Asghar"


console.log(myobj.name);

console.log(typeof myobj);

myfunc = function(){
    console.log("I am King");
    
}

console.log(myfunc);


// Stack VS Heap

let user ={
    email:' user@google.com',
    name: "Haneef "

}
let user2 = user;
user2.name = "waji"
user2.email = 'ali@gmail.com'
console.log(user2.email);

console.log(user.name);
console.log(user2);






