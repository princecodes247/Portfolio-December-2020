menuBtn.addEventListener('click', e => {
  header.classList.toggle('nav-menu-is-open')
  if (!menuIsOpen) {
    scroll.scrollTo('top')
    scroll.stop()
    navMenu.classList.add('open')
    navMenu.classList.remove('close')
    menuIsOpen = !menuIsOpen
  } else {
    navMenu.classList.add('close')
    navMenu.classList.remove('open')
    menuIsOpen = !menuIsOpen
    scroll.start()
  }

})