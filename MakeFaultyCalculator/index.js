console.log("Faulty calculator")
let a= Number(prompt("Enter first number: "))
let operator=prompt("Enter operator (+, -, *, /):");
let b= Number(prompt("Enter second number: "))
let random= Math.random();
let obj={
  "+" : "-",
  "*" :"+",
  "-" :"/",
  "/": "**"
}
console.log(random)
if(random>0.1) alert(`Result is ${eval(`${a} ${operator} ${b}`)}`)
else {
  operator= obj[operator]
  alert(`The result is ${eval(`${a} ${operator} ${b}`)}`) 

}


// let result;
// if (random < 0.1) {
     //OR
     // Faulty operation  // operator = obj[operator];
//     if (operator == "+") {
//         result = a - b;
//     }
//     else if (operator == "*") {
//         result = a + b;
//     }
//     else if (operator == "-") {
//         result = a / b;
//     }
//     else if (operator == "/") {
//         result = a ** b;
//     }
// }
// else {
//     // Correct operation
//     if (operator == "+") {
//         result = a + b;
//     }
//     else if (operator == "*") {
//         result = a * b;
//     }
//     else if (operator == "-") {
//         result = a - b;
//     }
//     else if (operator == "/") {
//         result = a / b;
//     }
// }
// console.log("a =", a);
// console.log("b =", b);
// console.log("operator =", operator);
// console.log("result =", result);