const playerClasses = ['x', 'circle']
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winMsg = document.getElementById('win-msg')
const restartbutton = winMsg.lastElementChild
let circleTurn = true

const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]


let start = () => {
    cellElements.forEach(cell => {
        cell.removeEventListener('click', handleClick)
        playerClasses.forEach(player => cell.classList.remove(player))
        cell.addEventListener('click', handleClick, { once: true })
    })

    circleTurn = false
    setHover()
    winMsg.classList.remove('show')
}

restartbutton.addEventListener('click', start)

function handleClick(e) {
    const cell = e.target

    cell.classList.add(playerClasses[+circleTurn])

    if(checkwin()) {
        endGame(false)
    } else if (isDraw()) {
        endGame(true)
    }

    setHover()
}

let setHover = () => {
    board.classList.remove(playerClasses[+circleTurn])
    circleTurn = !circleTurn
    board.classList.add(playerClasses[+circleTurn])
}

let checkwin = () => winningCombos.some(
    combo => combo.every(
        index => cellElements[index].classList.contains(playerClasses[+circleTurn])
    )
)

let isDraw = () => [...cellElements].every(cell => cell.classList.contains('x') || cell.classList.contains('circle'))

let endGame = draw => {
    if (draw) {
        console.log(draw)
        winMsg.firstElementChild.innerHTML = "It's a draw"
    } else {
        winMsg.firstElementChild.innerHTML = `${circleTurn ? "O's" : "X's"} wins!`
    }

    winMsg.classList.add('show')
}

start()
