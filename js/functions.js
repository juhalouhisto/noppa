const container = document.querySelector('#container')

const getRandomIntNumberInRange = (min,max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

container.addEventListener('click',() => {
    const randomizeNumber = getRandomIntNumberInRange(1,6)
    const diceImg = document.querySelector('#dice img')
    diceImg.src = `./img/${randomizeNumber}.png`
})
