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
const contactForm = document.querySelector('#contact-form')
const contactFormName = document.querySelector('#contact-form #name')
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

// For the titles

// For the contact form

contactForm.addEventListener('submit', () => {
    event.preventDefault()
    let contactName = contactForm.querySelector('#name').value
    let contactEmail = contactForm.querySelector('#email').value
    let contactMessage = contactForm.querySelector('#message').value
    contactForm.querySelector('#name').value = ''
    contactForm.querySelector('#email').value = ''
    contactForm.querySelector('#message').value = ''

    let errorBubble = document.createElement('div')
    errorBubble.innerText = 'Message Sent! ✌🏾✌🏾✌🏾'
    errorBubble.classList.add('error-bubble')
    contactForm.appendChild(errorBubble)
    errorBubble.addEventListener('animationend', () => {
        contactForm.removeChild(errorBubble)
    })

})