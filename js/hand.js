const introHand = document.querySelector('#intro-hand .hand')
var isCursorOverHand = false
const handTurn = () => {
    let x = (introHand.getBoundingClientRect().left) + (introHand.clientWidth / 2)
    let y = (introHand.getBoundingClientRect().top) + (introHand.clientHeight / 2)
    let radian = Math.atan2(event.pageX - x, event.pageY - y)
    let rotation = (radian * (180 / Math.PI) * -1) + 270
    introHand.style.transform = `rotate(${rotation}deg)`
}

introHand.addEventListener('mouseover', () => {
    introHand.innerText = '✋🏾'
    console.log(introHand.style.transform);
    isCursorOverHand = !isCursorOverHand
})
introHand.addEventListener('mouseleave', () => {
    introHand.innerText = '👈🏾'
    isCursorOverHand = !isCursorOverHand
})
introHand.addEventListener('mousedown', () => {
    introHand.innerText = '🖐🏾'
})
introHand.addEventListener('mouseup', () => {
    introHand.innerText = '✋🏾'
})