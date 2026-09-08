console.log("Kanika")

let boxes = document.getElementsByClassName("box")
// console.log(boxes)


// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 

boxes[2].style.backgroundColor = "red"//Order matters in JavaScript mein