console.log("Kanika")

setTimeout(()=>{
console.log("I am inside timeout")
},0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")

const fnc=() => {
  console.log("Nothing")
}
const callback = (arg, fnc) => {
    console.log(arg)
    fnc()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Kanika", fnc);
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )