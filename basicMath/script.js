const input = document.querySelector(".numberInput")
const txt = document.querySelector("p")

function squared(num){
    return num * num;
}

function cubed(num){
    return num * num * num;
}

function factorial(num){
    if(num < 0) return undefined;
    if(num === 0) return 1;
    let x = num - 1;
    while(x > 1){
        num *= x;
        x--;
    }
    return num;
}

input.addEventListener("change", () => {
    const num = parseFloat(input.value);

    if(isNaN(num)){
        txt.textContent = "You need to enter a number!";
    } else{
        txt.textContent = `${num} squared is ${squared(num)}, `;
        txt.textContent += `${num} cubed is ${cubed(num)}, `;
        txt.textContent += `${num} factorial is ${factorial(num)}.`;
    }
});