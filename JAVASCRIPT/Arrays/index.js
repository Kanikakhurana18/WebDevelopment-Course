//Arrays are collection of multiple data types [MUTABLE]
let arr=[1,2,3,4,5,6,7]
console.log(arr)
console.log(arr.length)
//modify the values
arr[2]=100;
console.log(arr)

//methods of array
//1.Convert to string
console.log(arr.toString())

//2. join()
console.log(arr.join(" and "));

//3.pop() removes the last element
console.log(arr.pop())

//4.push() add new element at end
arr.push(200);
console.log(arr)

//5.shift() removes the first element and return it
console.log(arr.shift())

//6.unshift() add new elem to begining and return array length
arr.unshift(500)
console.log(arr)

//7.delete()
delete(arr[1]);
console.log(arr);

//8.concat() used to join two arrays and return new array
let a1=[9,0,8]
console.log(arr.concat(a1)) //new array

//9. sort() ye descending mai hai [Kyuki sort() numbers ko number ki tarah nahi, string ki tarah compare karta hai.]
console.log(arr.sort())

//10. ascending sort
console.log(arr.sort((a,b)=>a-b))

//11. splice Agar tumhe actual element remove karna hai
console.log(arr.splice(6,1))
console.log(arr)
arr.splice(2,1,24,25,89)
console.log(arr)

//12. slice piece of array
console.log(arr.slice(4,7))

//13. reverse()
console.log(arr.sort((a,b)=>a-b))
console.log(arr.reverse())