const formDiv = document.getElementById("form")
const peopleUl = document.querySelector("#people > ul")
console.log(formDiv)

// document.addEventListener("DOMContentLoaded", () => {
//     // alert("JS Events are fun, makle sure to check out this page: https://developer.mozilla.org/en-US/docs/Web/Events")
// })

formDiv.addEventListener("submit", (e) => {
    e.preventDefault() // DO NOT REFRESH THE PAGE
    // debugger
    const name = e.target.name.value
    const age = e.target.age.value
    const newLi = document.createElement("li")
    newLi.innerText = `${name} ${age}`
    peopleUl.appendChild(newLi)
    e.target.reset()
})