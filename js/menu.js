menuBtn.addEventListener('click', e => {
  header.classList.toggle('nav-menu-is-open')
  if (!menuIsOpen) {
    scroll.scrollTo('top')
    scroll.stop()
    menuBtn.classList.add('open')
    menuBtn.classList.remove('close')
    navMenu.classList.add('open')
    navMenu.classList.remove('close')
    menuIsOpen = !menuIsOpen
  } else {
    menuBtn.classList.add('close')
    menuBtn.classList.remove('open')
    navMenu.classList.add('close')
    navMenu.classList.remove('open')
    menuIsOpen = !menuIsOpen
    scroll.start()
  }

})
let menuOptions = document.querySelectorAll('#nav-menu #menu li')
menuOptions.forEach(menuOption => {
  menuOption.addEventListener('click', e => {
    header.classList.remove('nav-menu-is-open')
    menuBtn.classList.add('close')
    menuBtn.classList.remove('open')
    navMenu.classList.add('close')
    navMenu.classList.remove('open')
    menuIsOpen = !menuIsOpen
    scroll.start()
    let timer = setTimeout(() => {
      if (e.target.innerText.toLowerCase() !== 'home') {
        scroll.scrollTo(`#${e.target.innerText.toLowerCase()}`)
      }
    }, 400)
  })

})