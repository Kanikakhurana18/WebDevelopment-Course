//To write a function in js use the keyword function
function sum(a, b, c = 3) { //default parameter
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}


result1 = sum(3, 2)
result2 = sum(7, 5)
result3 = sum(3, 13, 1) //this pass by vaue param overrrides default parameter

console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)
console.log("The sum of these numbers is: ", result3)

//Arrow function[It is simply another, shorter way of writing a function in JavaScript.]
const func1 =(x)=>{
  console.log("I am an arrow function ",x)
}
func1(3);
func1(7);

//OR
const product = (a, b) => console.log(a*b)
product(2,3)