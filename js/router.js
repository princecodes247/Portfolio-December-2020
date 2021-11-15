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

swup.on('clickLink', (e) => {
    let index = 0
    console.log(e.target)
        index = e.target.getAttribute("data-index") || e.target.parentNode.getAttribute("data-index") || e.target.parentNode.parentNode.getAttribute("data-index") 
        console.log(index)
    let work = worksList[index]
    swup.on('contentReplaced', ()=>{
    console.log()
     if (document.querySelector('.sect-title')) {
            document.querySelector('.sect-title').innerHTML = work.name
        }
         if (document.querySelector('.work-img')) {
            document.querySelector('.work-img').src =`./img/${work.img}`
        }

        if (document.querySelector('.work-desc')) {
            document.querySelector('.work-desc').innerText = work.desc
        }

        if (document.querySelector('.work-stack')) {
            let stack = document.querySelector('.work-stack')
            for (let i = 0; i < 3; i++) {
                let stackItem = document.createElement("div")
                stackItem.innerHTML = "HTML"
                stack.appendChild(stackItem)
            }
        }

        if (document.querySelector('.work-tags')) {
            let tags = document.querySelector('.work-tags')
            work.tags.forEach(tag => {
            console.log(tag)
                let tagElem = document.createElement("div")
                tagElem.innerHTML = tag
                tags.appendChild(tagElem)
            })
        }
    })
});

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