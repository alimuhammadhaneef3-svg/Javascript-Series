const array1=['HAneef','Rehman','Hassnan','Kashif']
const array2= ['Ayza','Nawal','Alisha','Gull']
const newarr = [...array1, ...array2]
console.log(newarr);
console.log(typeof newarr);


 const array3=array1.concat(array2)
 console.log(array3);
 

//Array flat
const another = [1,2 ,3 , [5 , 5, 4 ,[ 321 , 222, 111 ,[9,8,7]]]]
// const reall = another.flat(Infinity)
console.log(another.flat(Infinity));

console.log(Array.isArray(another));

console.log(Array.from("HAneef"));
console.log(Array.from('9900'));

let name1 = 'HAneef'
let name2 = "Sameer"
let name3 = "Saqib"
console.log(Array.from( name2));
console.log(Array.isArray(name3));


console.log(Array.of(name1,name2,name3));




