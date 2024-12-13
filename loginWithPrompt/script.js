let btn = document.addEventListener("click", userLogin)

function userLogin() {
    let user = prompt("Who's there?")

    if(user === "Admin" || user === "admin") {
        let password = prompt("Password?", "")
        if(password === "TheMaster") {
            alert("Welcome!")
        } else if(password === null || password === "") {
            alert("Canceled")
        } else {
            alert("Wrong password")
        }
    } else if(user === null || user === "") {
        alert("Canceled")
    } else {
        alert("I don't know you")
    }
}
