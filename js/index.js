// variables
const name = "Jonh"
let age = 25
var dob = '2025/04/01'

const pets = ["dog", 'cats', 'pig']
const person = {
  name: "Jonh",
  age: 25
}


// DOM Manipulation
const button = document.getElementById("first-button") 
const aGroupOfElement = document.getElementsByClassName("papa")
console.log(aGroupOfElement)
const paragraph = document.getElementById("first-div") 
console.log("this is the button:",button)

button.addEventListener("pointerenter", (mouseEvent) => {
 paragraph.innerText = "entered";
 console.log(paragraph)
})

button.addEventListener("pointerleave", (mouseEvent) => {
 paragraph.innerText = "left";
 console.log(paragraph)
})

button.addEventListener("click", () => {
  const age = prompt("Enter your age:")
  console.log("User entered age (string):", age)

  const ageInt = parseFloat(age)
  console.log("converted age (number):", ageInt)
})