let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.getDate());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleDateString());
console.log(mydate.getFullYear());

const { IoLogoNpm } = require("react-icons/io");


let calculatedate = new Date(2026,6,2)
console.log(calculatedate.toDateString());


let Timestamp = Date.now()
console.log(Timestamp);
console.log(typeof Timestamp);

console.log(calculatedate.getTime());

console.log(Math.floor(Date.now()/1000)); //converted into Seconds


let newdate =new Date()
console.log(newdate.toLocaleString());


 console.log(newdate.toLocaleString('default',{
    weekday : "short" ,
    month :"numeric"
    
 }));
 
 



