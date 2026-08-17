age= 21;
if (age == 18) {
    console.log("You can drive");
}

else if (age == 0) {
    console.log("Are you kidding?")
}

else if (age == 1) {
    console.log("Are you again kidding?")
}

else {
    console.log("You can drive as you are above 18");
}

//ternary operator
a = 6;
b=8;
let c= (a>b) ? a-b : b-a;
/* this ternary operator means
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}

*/