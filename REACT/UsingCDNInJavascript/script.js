// let h1= document.createElement("h1")
// h1.innerHTML= "Kanika Khurana"

// document.getElementById("root").appendChild(h1)

let h1= React.createElement("h1",null,"Kanika Khurana")

ReactDOM.createRoot(document.getElementById("root")).render(h1)