const playerClasses = ['circle', 'x']
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circleTurn = true

let start = () => {
    cellElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    })

    circleTurn = true
    setHover()
}

function handleClick(e) {
    const cell = e.target

    cell.classList.add(playerClasses[+circleTurn])

    setHover()
    console.log(circleTurn, playerClasses[+circleTurn])
}

let setHover = () => {
    board.classList.remove(playerClasses[+circleTurn])
    circleTurn = !circleTurn
    board.classList.add(playerClasses[+circleTurn])
}

start()
