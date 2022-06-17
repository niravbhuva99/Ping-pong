
// const p1Button = document.querySelector('#p1Button')
// const p2Button = document.querySelector('#p2Button')
// const resetButton = document.querySelector('#reset')
// const p1Display = document.querySelector('#p1Display')
// const p2Display = document.querySelector('#p2Display')
// const winnigScoreSelect = document.querySelector('#playto')
// let winnigScore = 3;

// let p1Score = 0;
// let p2Score = 0;
// let isGameOver = false
// p1Button.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (!isGameOver) {
//         p1Score += 1;
//     }
//     if (p1Score === winnigScore) {
//         isGameOver = true;
//         p1Display.classList.add('winner')
//         p2Display.classList.add('loser')
//         p1Button.disabled = true;
//         p2Button.disabled = true;
//     }
//     p1Display.innerText = p1Score

// })

// p2Button.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (!isGameOver) {
//         p2Score += 1;
//     }
//     if (p2Score === winnigScore) {

//         isGameOver = true;
//         p2Display.classList.add('winner')
//         p1Display.classList.add('loser')
//         p1Button.disabled = true;
//         p2Button.disabled = true;
//     }
//     p2Display.innerText = p2Score
// })
// resetButton.addEventListener('click', reset)

// winnigScoreSelect.addEventListener('change', function () {
//     winnigScore = parseInt(this.value)
//     reset();

// })

// function reset() {
//     isGameOver = false;
//     p1Score = 0
//     p2Score = 0
//     p1Display.textContent = 0
//     p2Display.textContent = 0
//     p1Display.classList.remove('winner', 'loser')
//     p2Display.classList.remove('loser', 'winner')
//     p1Button.disabled = false;
//     p2Button.disabled = false;
// }
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
