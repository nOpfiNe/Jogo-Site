// Defina a palavra que o jogador deve adivinhar
const word = "PEIXE";
const wordContainer = document.getElementById("word-container");
const keyboardContainer = document.getElementById("keyboard-container");

// Crie os botões do teclado
for (let i = 65; i <= 90; i++) {
    const button = document.createElement("div");
    button.className = "button";
    button.innerHTML = String.fromCharCode(i);
    button.addEventListener("click", handleGuess);
    keyboardContainer.appendChild(button);
}

// Função para lidar com os cliques nos botões do teclado
function handleGuess(event) {
    const letter = event.target.innerHTML;
    event.target.removeEventListener("click", handleGuess);

    if (word.includes(letter)) {
        event.target.className = "button correct";
        revealLetter(letter);
        checkWin();
    } else {
        event.target.className = "button wrong";
    }
}

// Função para revelar a letra correta
function revealLetter(letter) {
    const letters = wordContainer.getElementsByClassName("hidden");
    for (let i = 0; i < letters.length; i++) {
        if (letters[i].innerHTML === letter) {
            letters[i].classList.remove("hidden");
        }
    }
}

// Função para verificar se o jogador venceu
function checkWin() {
    const hiddenLetters = wordContainer.getElementsByClassName("hidden");
    if (hiddenLetters.length === 0) {
        const victoryAudio = document.getElementById("victory-audio");
        victoryAudio.play();
        alert("Parabéns Viajante!");
    }
}

// Inicializar a interface de jogo
for (let i = 0; i < word.length; i++) {
    const letterContainer = document.createElement("span");
    letterContainer.className = "hidden";
    letterContainer.innerHTML = word[i];
    wordContainer.appendChild(letterContainer);
}