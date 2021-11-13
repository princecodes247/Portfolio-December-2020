const swup = new Swup({
    plugins: [
        new SwupMorphPlugin(),
        new SwupPreloadPlugin()
        ],
    animateHistoryBrowsing: false,
});


setTimeout(function () {
    document.documentElement.classList.remove('is-animating');
}, 100)

function init() {
    // scroll.init()
    if (document.querySelector('#carousel')) {
        // something like new Carousel('#carousel')
    }
    
    if (document.querySelector('#lightbox')) {
        // something like $('#lightbox').lightbox()
    }
    
    if (document.querySelector('#something-else')) {
        // ...
    }
}



init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);

swup.on("animateOutStart", function() {
    scroll.destroy()
    console.log("Doneit")
})
swup.on('pageView', ()=>{
 let formerScrollbar = document.querySelector(".c-scrollbar")
 formerScrollbar.parentNode.removeChild(formerScrollbar)
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    elMobile: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.05,
    smoothMobile: true,
    touchMultiplier: 3,
    repeat: false,
  });
  scroll.on("scroll", (a) => {

    if (a.scroll.y > window.innerHeight - (window.innerHeight / 5)) {
      header.classList.remove('trans')
    } else {
      header.classList.add('trans')
    }
  });



});