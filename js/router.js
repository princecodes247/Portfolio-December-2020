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


swup.on("clickLink", function() {
    scroll.destroy()
    console.log("Doneit")
})

init();

// this event runs for every page view after initial load
swup.on('contentReplaced', init);
swup.on('contentReplaced', ()=>{
    console.log("dds")

    setTimeout(function () {
    scroll.init()
    scroll.update()
}, 5000)
});