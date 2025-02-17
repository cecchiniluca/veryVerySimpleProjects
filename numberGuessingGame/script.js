let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let guessCount = 1;
let resetButton;

function checkGuess() {
    // aloca o palpite em uma variável, o método Number para garantir que seja um número:
    const userGuess = Number(guessField.value);

    // insere o texto para palpites anteriores, caso algum já tenha sido dado. Por isso a igualdade com 1:
    if(guessCount === 1) {
        guesses.textContent = "Previous guesses:";
    }

    // adiciona o palpite dado junto com o texto:
    guesses.textContent = `${guesses.textContent} ${userGuess}`

    // compara o palpite com resposta, limpa o lowOrHi em caso de vitória ou derrota (número de palpites = 10) e chama a função de novo jogo:
    if(userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right!"
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver()
    } else if(guessCount === 10) {
        lastResult.textContent = "!!!GAME OVER!!!"
        lowOrHi.textContent = "";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.backgroundColor = "red";
        if(userGuess < randomNumber) {
            lowOrHi.textContent = "Last guess was too low!"
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!"
        }
    }
    // as próximas 3 linhas preparam o app para o próximo palpite
    // incrementa a contagem de palpites:
    guessCount++;
    // limpa o campo de palpites
    guessField.value = "";
    // foca de novo no campo:
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    // insere um objeto Node após o último elemento do doc.:
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame)
}

function resetGame() {
    guessCount = 1;
    
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas ) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}