let a= 1;
//1. for loop
// for(let i=0;i<100;i++){
//   console.log(a+i);
// }

//2. for in loop for printing values
let object = {
    name: "kanika",
    role: "Programmer"
}
for (const key in object) {
  const element = object[key];
  console.log(key,element)
}

//3. for of loop to print values[ use in iterative data structure like arrays, strings]
for (const element of "Kanika") {
  console.log(element)
}

//4.while loop
// let j=0
// while(j<600){
//   console.log(j);
//   j+=2;
// }

//5. do-while loop [usually when we want to run the one time statement]
let i=10;
do{
  console.log(i);
  i++;
}
while(i<6)