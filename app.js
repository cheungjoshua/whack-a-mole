const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')

let score = document.querySelector('#score')

let result = 0;
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

square.forEach(hit => {
    hit.addEventListener('mouseup', ()=> {
        if(hit.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})


function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)    
}

moveMole()

function countdown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0) {
        clearInterval(timerId)
        alert('Game Over! Your score is ' + result)
    }
}

let timerId = setInterval(countdown, 1000)