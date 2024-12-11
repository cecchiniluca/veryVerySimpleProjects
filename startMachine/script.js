let btn = document.querySelector("button");
let txt = document.querySelector("p");

btn.addEventListener("click", engine)

function engine() {
    if(btn.textContent === "Start machine") {
        btn.textContent = "Stop machine"
        txt.textContent = "The machine has started."
    } else {
        btn.textContent = "Start machine"
        txt.textContent = "The machine has stopped."
    }
}