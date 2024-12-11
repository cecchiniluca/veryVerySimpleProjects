let btn = document.querySelector("button");

btn.addEventListener("click", greet);

function greet() {
    let name = prompt("What's your name?")
    let fullGreeting = document.getElementById("greeting")
    fullGreeting.innerHTML = `Hello, ${name}, nice to meet you!`
}