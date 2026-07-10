// function Si(){
// console.log(89);


// return true
// }

// Si()
// console.log(typeof (Si));

// function addtwoNum (Num1,Num2){
//     console.log(Num1 + Num2);
    
// }


// function addtwoNum (Num1,Num2){
//    let result = Num1 * Num2
//     return result
// }
// const result = addtwoNum (5 ,8)
// console.log("TResult is after Multiplying is :" ,result);


// function addtwoNum (Num1,Num2){
//    return Num1 + Num2
    
// }
// console.log(addtwoNum (19,2));
 
function Cart (val1 , val2 ,...Num1)//rest operator 
{
    return Num1
}
console.log(Cart (290,340,670,321,666));


function getdata (anyobject){
return `Name is ${anyobject.name} and age is ${anyobject.age}`
}

console.log( getdata({
    name : "Rama",
    age : 22
}));

let wearray = [3,5,77,88,99,12,15]
function accessarray (getarray){
    return getarray[4]
}
console.log( accessarray(wearray));




