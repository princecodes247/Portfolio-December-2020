console.log(`Hi ${navigator.userAgent.toLowerCase()}`);
const body = document.querySelector("body");
const skillsGrid = document.querySelector('#skills .grid')
const worksGrid = document.querySelector('#works .grid')

const header = document.querySelector('header')
const menuBtn = document.querySelector("#ham")
const skills = "HTML/CSS, Sass, BootStrap, Wordpress, Tailwind, JS, React/Redux, Python, Node.JS, Ngrok, Linux, GitHub, Organization, Collaboration, Creative Direction, Google, StackOverflow"
const works = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11"
//const stack = "HTML, CSS, Sass, JS, BootStrap, Wordpress, React, PHP, Python, Node.JS, MongoDB, MySQL, Express, Java, C, Nginx, Linux, REST, Apache, Illustrator, Adobe XD, Photoshop, GitHub, Organization, Collaboration, Design, Google, StackOverflow"
const navMenu = document.querySelector('#nav-menu')
let skillsList = skills.split(", ")
let worksList = works.split(", ")
let menuIsOpen = false
function addToGrid(item, target) {
    let container = document.createElement('span')
    container.classList.add("grid-item")
    container.setAttribute("data-scroll", '');
    container.setAttribute("data-scroll-class", 'expand');
    let name = document.createElement('span')
    name.innerText = item
    container.appendChild(name)
    target.appendChild(container)
}

skillsList.forEach(skill => addToGrid(skill, skillsGrid))
worksList.forEach(work => addToGrid(work, worksGrid))

