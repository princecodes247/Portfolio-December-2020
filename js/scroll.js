
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    elMobile: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.03,
    smoothMobile: true,
    touchMultiplier: 5,
    multiplier: 0.8,
    firefoxMultiplier: 0.8,
    repeat: false,
  });


  scroll.on("scroll", (a) => {

    if (a.scroll.y > window.innerHeight - (window.innerHeight / 5)) {
      header.classList.remove('trans')
    } else {
      header.classList.add('trans')
    }
  });


