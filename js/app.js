console.log(`Hi ${navigator.userAgent.toLowerCase()}`);
const body = document.querySelector("body");
const grid = document.querySelector('.grid')
const header = document.querySelector('header')
const menuBtn = document.querySelector("#ham")
const stack = "HTML, CSS, Sass, BootStrap, Tailwind, JS, React, Python, Node.JS, MongoDB, Express, Nginx, Linux, Illustrator, Adobe XD, Photoshop, GitHub, Organization, Collaboration, Design, Google, StackOverflow"
//const stack = "HTML, CSS, Sass, JS, BootStrap, React, PHP, Python, Node.JS, MongoDB, MySQL, Express, Java, C, Nginx, Linux, REST, Apache, Illustrator, Adobe XD, Photoshop, GitHub, Organization, Collaboration, Design, Google, StackOverflow"
const navMenu = document.querySelector('#nav-menu')
let stackList = stack.split(", ")
let menuIsOpen = false
function addStackToGrid(skill) {
    let container = document.createElement('span')
    container.classList.add("grid-item")
    container.setAttribute("data-scroll", '');
    container.setAttribute("data-scroll-class", 'expand');
    let name = document.createElement('span')
    name.innerText = skill
    container.appendChild(name)
    grid.appendChild(container)
}

stackList.forEach(stack => addStackToGrid(stack))

menuBtn.addEventListener('click', e => {
    header.classList.toggle('nav-menu-is-open')
    if (!menuIsOpen) {
        navMenu.classList.add('open')
        navMenu.classList.remove('close')
        menuIsOpen = !menuIsOpen
    } else {
        navMenu.classList.add('close')
        navMenu.classList.remove('open')
        menuIsOpen = !menuIsOpen
    }



})