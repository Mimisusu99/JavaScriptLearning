// DOM Manipulation Search
// let el = document.getElementById("div-1")
// let el = document.getElementsByTagName("div")
// let el = document.getElementsByClassName("div-2")

// QUERY SELECTOR
// let el = document.querySelector("#div-1")
// let el = document.querySelector("div")
// let el = document.querySelector(".div-2")
// console.log(el)

// DOM MANIPULATION HTML ELEMENTS CHANGING

// let el = document.querySelector("#div-1")
// console.log(el)

// el.innerHTML = "<p>Hello World</p>"

// let el = document.getElementById("input")
// console.log(input)

// input.setAttribute("type", "checkbox")

// let el = document.getElementById("input")
// Input.style.borderColor = "red"
// input.style.color = "blue"

// ADDING AND DELETING ELEMENTS

// const pElement = document.createElement("p")
// const divEl = document.getElementById("div-1")

// divEl.appendChild(pElement)
// pElement.innerHTML = "P, Punteun"

// divEl.removeChild(pElement)

// const hello = document.getElementById("hello")

// hello.addEventListener("mouseenter", function() {
//     // console.log("Mouse enter hello world text")
//     hello.style.border = "1px solid blue"
// })

// const btn = document.getElementById("btn")
// btn.addEventListener("click", function() {
//     const boom = document.getElementById("boom")
//     boom.style.display = "block"    
// })

function showBoom () {
    const boom = document.getElementById("boom")
    boom.style.display = "block"
}