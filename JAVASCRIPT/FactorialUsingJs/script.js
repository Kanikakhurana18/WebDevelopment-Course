let a = Number(prompt("Enter your number"))
console.log("Input:", a); 

function factorial(number) {
  let arr = Array.from(Array(number + 1).keys())
  console.log("Array:", arr);
  console.log("After slice:", arr.slice(1));
  let c = arr.slice(1,).reduce((a, b) => a * b)
  return c
}

function fact(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact
}

console.log(factorial(a))
console.log(fact(a))