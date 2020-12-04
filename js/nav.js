const marker = document.querySelector('#marker');
const navItems = document.querySelectorAll('header nav ul li:not(#marker)')
const nav = document.querySelector('header nav ul')

function markerPos(e) {
    marker.style.left = e.offsetLeft + "px";
    marker.style.width = e.offsetWidth + "px";
}

navItems.forEach(navItem => {
    navItem.addEventListener('mouseover', (e) => {
        markerPos(e.target)

    })

})

nav.addEventListener('mouseleave', (e) => {
    marker.style.left = "-1px";
    marker.style.width = "68px";
})

