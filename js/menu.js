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