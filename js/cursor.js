const cursor = document.querySelector('#cursor')
const cursorovers = document.querySelectorAll('.cursorover')


body.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + "px"
    cursor.style.left = e.clientX + "px"

})

cursorovers.forEach(cursorover => {
    cursorover.addEventListener('mouseenter', (e) => {
        console.log('enter');
        cursor.classList.add('over')
    })


    cursorover.addEventListener('mouseleave', (e) => {
        cursor.classList.remove('over')
    })
})
