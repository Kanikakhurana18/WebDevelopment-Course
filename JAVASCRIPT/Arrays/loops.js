let a=[1,2,3,4,5,6,7];
//1. for loop
// for (let index = 0; index < a.length; index++) {
//   const element = a[index];
//   console.log(element)
// }

// 2.for each loop
a.forEach((element, index, arr)=> {
  console.log(element, index, arr);
});

//3. for in loop
// let object={
//   x:1,
//   y:2,
//   z:3
// }
// for (const key in object) {
//   if (!Object.hasOwn(object, key)) continue;
//   const element = object[key];
//   console.log(key,element)
// }

//4.for of loop
// for (const element of a) {
//   console.log(element)
// }

//5. Map helps in creating new array with the help of original array
// let newarr= a.map((e)=>{
//   return e**2;
// })
// console.log(newarr)

//6. filter
// const greaterThanFive=(e)=>{
//   if(e>5) return true;
//   return false;
// }
// console.log(a.filter(greaterThanFive))

//7.reduce method - it reduces to single value
// const red=(a,b)=> {
//   return a+b;}
// console.log(a.reduce(red))

//8. Array from  used to create array from any other object
Array From("Kanika Khurana")