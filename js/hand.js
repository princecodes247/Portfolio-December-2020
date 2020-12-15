const homeHand = document.querySelector('#home-hand .hand')
var isCursorOverHand = false
const handTurn = () => {
    let x = (homeHand.getBoundingClientRect().left) + (homeHand.clientWidth / 2)
    let y = (homeHand.getBoundingClientRect().top) + (homeHand.clientHeight / 2)
    let radian = Math.atan2(event.pageX - x, event.pageY - y)
    let rotation = (radian * (180 / Math.PI) * -1) + 270
    homeHand.style.transform = `rotate(${rotation}deg)`
}

homeHand.addEventListener('mouseover', () => {
    homeHand.innerText = '✋🏾'
    console.log(homeHand.style.transform);
    isCursorOverHand = !isCursorOverHand
})
homeHand.addEventListener('mouseleave', () => {
    homeHand.innerText = '👈🏾'
    isCursorOverHand = !isCursorOverHand
})
homeHand.addEventListener('mousedown', () => {
    homeHand.innerText = '🖐🏾'
})
homeHand.addEventListener('mouseup', () => {
    homeHand.innerText = '✋🏾'
})