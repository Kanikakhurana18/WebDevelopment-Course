//Variable is a container that stores a value
var a=5;
var b=5;
console.log(a +b+10);
let d = 6.8;
let e = "kanika";
let f = null;
// var 55a = "Rohan"; // Not Allowed
console.log(typeof a, typeof b, typeof 8, typeof d, typeof e, typeof f);

// //Scope of var [Global scope] [can be updated and redeclared]
// {
//   var a=10;
//   console.log(a); //values changes 10
// }
// console.log(a); //similarly value changes to 10


//Scope of let [Block scope] [can be updated  but not redeclared]
{
  let d=10;
  console.log(d); //values changes 10 as let is a block scope
}
console.log(d); //similarly value changes to 6.8


//const can neither be updated nor be redeclared [this must be initialised during declaration]
// const a1=6;
// a1=a1+1;// Assignment to constant variable. is not allowed
// console.log(a1);

let x = "kanika";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;
let s= 10n ; //bigInt 
let t= Symbol(); //symbol

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r , typeof s, typeof t)

//declaring object
let obj={
  "name" : "Kanika",
  "Job" :"Engineer"
}
console.log(obj);
obj.salary = "100crores";
console.log(obj);
obj.salary = "500crores";
console.log(obj);