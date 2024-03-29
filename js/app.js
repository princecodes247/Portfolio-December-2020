console.log(`Hi ${navigator.userAgent.toLowerCase()}`);
const body = document.querySelector("body");
const skillsGrid = document.querySelector('#skills .grid')
const worksGrid = document.querySelector('#works .grid')
const header = document.querySelector('header')
const menuBtn = document.querySelector("#ham")
const works = "1, 2, 3, 4, 5"
//const stack = "HTML, CSS, Sass, JS, BootStrap, Wordpress, React, PHP, Python, Node.JS, MongoDB, MySQL, Express, Java, C, Nginx, Linux, REST, Apache, Illustrator, Adobe XD, Photoshop, GitHub, Organization, Collaboration, Design, Google, StackOverflow"
const navMenu = document.querySelector('#nav-menu')
const contactForm = document.querySelector('#contact-form')
const contactFormName = document.querySelector('#contact-form #name')

let workTags = ["feat", "full", "front", "api", "lib", "console", "basic", "ui", ""]

let worksList = 
[
{
    name:"Veldora",
    link: "https://veldora.herokuapp.com/",
    dateCreated: "",
    img: "img--veldora.png",
    tags: ["full", "featured"],
    desc: "Veldora (formerly known as Mailion) is a form handling PAAS that makes form handling and data gathering simpler and easy", 
    source: "https://github.com/princecodes247/veldora"
},
{
    name:"Portfolio (Star Wars Version)",
    link: "https://princecodes.vercel.app/",
    dateCreated: "",
    img: "img--portfoliostarwars.png",
    tags: ["front", "featured"], 
    desc: "A simple version of my portfolio with its theme based around the popular show, Star Wars", 
    source: "https://github.com/princecodes247/Portfolio-April-2021"
},
{
    name:"FirstTime2020",
    link: "https://firsttime2020.herokuapp.com",
    dateCreated: "",
    img: "img--firsttime.png",
    tags: ["full", "featured"], 
    desc: "/work.html",
    source: "https://github.com/princecodes247/FirstTime"
},
{
    name:"InstaNovella",
    link: "https://instanovella2.herokuapp.com/",
    dateCreated: "",
    img: "img--instanovella.png",
    tags: ["full", "featured"], desc: "",
    source: "https://github.com/princecodes247/Instanovella-full"
},
{
    name:"Glassmorphism Generator",
    link: "https://glassmorphism-generator-princecodes247.vercel.app/",
    dateCreated: "",
    img: "img--glassmorphismgen.png",
    tags: ["front", "featured"], desc: "",
    source: "https://github.com/princecodes247/Glassmorphism"
},
{
     name:"UTrade Template",
    link: "https://princecodes247.github.io/uemma_trade",
    dateCreated: "",
    img: "img--utrade.png",
    tags: ["front", "featured"], desc: "", 
    source: "https://github.com/princecodes247/uemma_trade"
},
{
     name:"Mailion",
    link: "https://mailion.herokuapp.com/",
    dateCreated: "",
    img: "img--mailion.png",
    tags: ["full", "featured"], desc: "", 
    source: "https://github.com/princecodes247/mailion-server"
    
},
{
     name:"Facebook Comment Loading",
    link: "https://princecodes247.github.io/Facebook-comment-loading-animation-/",
    dateCreated: "",
    img: "img--facebookloading.png",
    tags: ["front"], desc: "", 
    source: ""
    
},
{
     name:"Windows Button Grid Effect",
    link: "https://princecodes247.github.io/Facebook-comment-loading-animation-/",
    dateCreated: "",
    img: "img--windowseffect.png",
    tags: ["front"], desc: "", 
    source: ""
    
},
{
     name:"Hex Grid",
    link: "https://princecodes247.github.io/Facebook-comment-loading-animation-/",
    dateCreated: "",
    img: "img--hexgrid.png",
    tags: ["front"], desc: "", 
    source: ""
    
},
{
     name:"pyCommit",
    link: "",
    dateCreated: "",
    img: "img--pycommit.png",
    tags: ["console"], desc: "", source: ""
    
},
{
     name:"David Eye",
    link: "https://princecodes247.github.io/David-Eye/",
    dateCreated: "",
    img: "img--davideye.png",
    tags: ["front"], desc: "", 
    source: "https://github.com/princecodes247/David-Eye"
    
},
{
     name:"CipherType",
    link: "https://github.com/princecodes247/pyCommit",
    dateCreated: "",
    img: "img--ciphertype.png",
    tags: ["lib", "featured"], desc: "", 
    source: "https://github.com/princecodes247/CipherType"
    
},
{
     name:"Kotes",
    link: "",
    dateCreated: "",
    img: "img--kotes.png",
    tags: [], desc: "", source: ""
    
},
{
     name: "Contest App",
    link: "",
    dateCreated: "",
    img: "img--contestapp.png",
    tags: ["full", "featured"], desc: "", 
    source: "https://github.com/princecodes247/Contest-App"
    
},
{
     name: "ISabi",
    link: "https://princecodes247.github.io/isabi/",
    dateCreated: "",
    img: "img--isabi.png",
    tags: ["front"], desc: "", 
    source: "https://github.com/princecodes247/isabi"
    
},
{
     name: "CryptoVest",
    link: "https://princecodes247.github.io/CryptoVest--Client/home.html",
    dateCreated: "",
    img: "img--cryptovest.png",
    tags: ["front"], desc: "", 
    source: "https://github.com/princecodes247/CryptoVest--Client"
    
}
]
let worksTags = worksList.map(worksList => worksList.tags)
worksTags = worksTags.reduce((previousItem, item) => {
    let tags = [...previousItem, ...item]
    return tags
})
worksTags = new Set(worksTags)
console.log(worksTags)
let menuIsOpen = false


const skillsList = [
    {
        name: "HTML/CSS",
        icon: `
        <svg fill="currentColor" width="35" height="35" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill="#e44f26" d="M5.902 27.201L3.655 2h24.69l-2.25 25.197L15.985 30 5.902 27.201z"></path><path xmlns="http://www.w3.org/2000/svg" fill="#f1662a" d="M16 27.858l8.17-2.265 1.922-21.532H16v23.797z"></path><path xmlns="http://www.w3.org/2000/svg" fill="#ebebeb" d="M16 13.407h-4.09l-.282-3.165H16V7.151H8.25l.074.83.759 8.517H16v-3.091zm0 8.027l-.014.004-3.442-.929-.22-2.465H9.221l.433 4.852 6.332 1.758.014-.004v-3.216z"></path><path xmlns="http://www.w3.org/2000/svg" fill="#fff" d="M15.989 13.407v3.091h3.806l-.358 4.009-3.448.93v3.216l6.337-1.757.046-.522.726-8.137.076-.83h-7.185zm0-6.256v3.091h7.466l.062-.694.141-1.567.074-.83h-7.743z"></path></svg>
        `
    },
    {
        name: "Sass",
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M26.11 17.572a5.8 5.8 0 00-2.537.588 5.345 5.345 0 01-.568-1.314 3.53 3.53 0 01-.051-1.1 9.811 9.811 0 01.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256a6.171 6.171 0 00-.235.834 19.686 19.686 0 01-1.713 3.294 3.186 3.186 0 01-.44-2.066 9.811 9.811 0 01.332-1.192c-.005-.051-.061-.292-.624-.3s-1.048.107-1.1.256-.118.5-.235.834-1.483 3.386-1.841 4.173c-.184.4-.343.726-.455.946a.233.233 0 01-.02.041l-.153.292v.005c-.077.138-.159.266-.2.266a1.711 1.711 0 01.01-.869c.2-1.059.69-2.705.685-2.762 0-.031.092-.317-.317-.465a.508.508 0 00-.578.1c-.036 0-.061.087-.061.087s.445-1.851-.849-1.851a3.855 3.855 0 00-2.475 1.683c-.348.189-1.089.593-1.882 1.028-.3.169-.614.338-.905.5-.02-.02-.041-.046-.061-.066C6.87 17.6 3.975 16.416 4.1 14.171c.046-.818.327-2.966 5.559-5.575 4.306-2.122 7.733-1.534 8.326-.23.849 1.862-1.836 5.319-6.285 5.82a3.351 3.351 0 01-2.813-.711c-.235-.256-.271-.271-.358-.22-.143.077-.051.307 0 .44a2.626 2.626 0 001.606 1.263 8.55 8.55 0 005.217-.517c2.7-1.043 4.8-3.943 4.184-6.372-.619-2.465-4.71-3.278-8.582-1.9a19.5 19.5 0 00-6.595 3.783c-2.133 1.995-2.47 3.728-2.332 4.455.5 2.578 4.051 4.255 5.472 5.5a8.554 8.554 0 01-.194.107c-.711.353-3.421 1.77-4.1 3.268-.767 1.7.123 2.915.711 3.079a4.374 4.374 0 004.71-1.908 4.725 4.725 0 00.423-4.353.107.107 0 00-.02-.031l.557-.327a27.2 27.2 0 011.028-.578 6.74 6.74 0 00-.363 1.862 3.886 3.886 0 00.834 2.7.921.921 0 00.675.22c.6 0 .875-.5 1.176-1.094.368-.726.7-1.57.7-1.57s-.414 2.281.711 2.281c.409 0 .823-.532 1.008-.8v.005l.031-.051.066-.107v-.01c.164-.286.532-.936 1.079-2.015.706-1.391 1.386-3.13 1.386-3.13a8.888 8.888 0 00.271 1.13 10.643 10.643 0 00.583 1.309c-.164.23-.266.358-.266.358l.005.005c-.133.174-.276.363-.435.547a16.3 16.3 0 00-1.314 1.647.447.447 0 00.123.6 1.116 1.116 0 00.685.113 3.147 3.147 0 001.028-.235 3.45 3.45 0 00.885-.465 1.98 1.98 0 00.849-1.744 3.521 3.521 0 00-.322-1.233c.051-.072.1-.143.148-.215a23.428 23.428 0 001.534-2.649 8.888 8.888 0 00.271 1.13 7.57 7.57 0 00.5 1.125 4.861 4.861 0 00-1.497 1.922c-.322.931-.072 1.35.4 1.447a1.425 1.425 0 00.747-.153 3.4 3.4 0 00.946-.486 2.126 2.126 0 001.043-1.729 3.268 3.268 0 00-.235-1.023 5.356 5.356 0 012.716-.312c2.434.286 2.915 1.805 2.823 2.445a1.618 1.618 0 01-.772 1.094c-.169.107-.225.143-.21.22.02.113.1.107.245.087A1.9 1.9 0 0030 20.7c.077-1.5-1.355-3.145-3.887-3.13zM7.33 23.9c-.808.88-1.933 1.212-2.419.931-.522-.3-.317-1.6.675-2.532a12.884 12.884 0 011.9-1.417c.118-.072.292-.174.5-.3l.056-.031.123-.077A3.493 3.493 0 017.33 23.9zm5.881-4c-.281.685-.869 2.44-1.227 2.342-.307-.082-.5-1.412-.061-2.726a6.193 6.193 0 01.956-1.754c.44-.491.926-.655 1.043-.455a9.062 9.062 0 01-.711 2.593zm4.853 2.322c-.118.061-.23.1-.281.072-.036-.02.051-.1.051-.1s.609-.655.849-.951c.138-.174.3-.378.476-.609v.066c0 .782-.757 1.309-1.094 1.524zm3.744-.854c-.087-.061-.072-.266.22-.905a3.408 3.408 0 01.834-1.074 1.448 1.448 0 01.082.471 1.547 1.547 0 01-1.135 1.509z" fill="#cd6799"></path></svg>`
    },
    {
        name: 'Blogger',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M21.976 24H2.026C.9 24 0 23.1 0 21.976V2.026C0 .9.9 0 2.025 0H22.05C23.1 0 24 .9 24 2.025v19.95C24 23.1 23.1 24 21.976 24zM12 3.975H9A5.025 5.025 0 003.975 9v6A5.025 5.025 0 009 20.024h6A5.025 5.025 0 0020.024 15v-3.975c0-.6-.45-1.05-1.05-1.05H18a.995.995 0 01-.976-.976A5.025 5.025 0 0012 3.973zm3.074 12H9c-.525 0-.975-.45-.975-.975s.45-.976.975-.976h6.074c.526 0 .977.45.977.976s-.45.976-.975.976zm-2.55-7.95c.527 0 .976.45.976.975s-.45.975-.975.975h-3.6c-.525 0-.976-.45-.976-.975s.45-.975.975-.975h3.6z"></path></svg>`
    },
    {
        name: 'BootStrap',
        icon: ``
    },
    {
        name: 'Wordpress',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709A10.794 10.794 0 011.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"></path></svg>`
    },
    {
        name: 'Tailwind',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M9 13.7q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1zm-7 8.4q1.4-5.6 7-5.6c5.6 0 6.3 4.2 9.1 4.9q2.8.7 4.9-2.1-1.4 5.6-7 5.6c-5.6 0-6.3-4.2-9.1-4.9q-2.8-.7-4.9 2.1z" fill="#44a8b3"></path></svg>`
    },
    {
        name: 'JS',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" fill="#f5de19" d="M2 2h28v28H2z"></path><path xmlns="http://www.w3.org/2000/svg" d="M20.809 23.875a2.866 2.866 0 002.6 1.6c1.09 0 1.787-.545 1.787-1.3 0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964 0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 013.742 2.107L25 18.128A1.789 1.789 0 0023.311 17a1.145 1.145 0 00-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133 0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 01-4.795-2.691zm-9.295.228c.413.733.789 1.353 1.693 1.353.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 01-3.947-2.4z"></path></svg>`
    },
    {
        name: 'React/Redux',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><circle xmlns="http://www.w3.org/2000/svg" cx="16" cy="15.974" r="2.5" fill="#00d8ff"></circle><path xmlns="http://www.w3.org/2000/svg" d="M16 21.706a28.385 28.385 0 01-8.88-1.2 11.3 11.3 0 01-3.657-1.958A3.543 3.543 0 012 15.974c0-1.653 1.816-3.273 4.858-4.333A28.755 28.755 0 0116 10.293a28.674 28.674 0 019.022 1.324 11.376 11.376 0 013.538 1.866A3.391 3.391 0 0130 15.974c0 1.718-2.03 3.459-5.3 4.541a28.8 28.8 0 01-8.7 1.191zm0-10.217a27.948 27.948 0 00-8.749 1.282c-2.8.977-4.055 2.313-4.055 3.2 0 .928 1.349 2.387 4.311 3.4A27.21 27.21 0 0016 20.51a27.6 27.6 0 008.325-1.13C27.4 18.361 28.8 16.9 28.8 15.974a2.327 2.327 0 00-1.01-1.573 10.194 10.194 0 00-3.161-1.654A27.462 27.462 0 0016 11.489z" fill="#00d8ff"></path><path xmlns="http://www.w3.org/2000/svg" d="M10.32 28.443a2.639 2.639 0 01-1.336-.328c-1.432-.826-1.928-3.208-1.327-6.373a28.755 28.755 0 013.4-8.593 28.676 28.676 0 015.653-7.154 11.376 11.376 0 013.384-2.133 3.391 3.391 0 012.878 0c1.489.858 1.982 3.486 1.287 6.859a28.806 28.806 0 01-3.316 8.133 28.385 28.385 0 01-5.476 7.093 11.3 11.3 0 01-3.523 2.189 4.926 4.926 0 01-1.624.307zm1.773-14.7a27.948 27.948 0 00-3.26 8.219c-.553 2.915-.022 4.668.75 5.114.8.463 2.742.024 5.1-2.036a27.209 27.209 0 005.227-6.79 27.6 27.6 0 003.181-7.776c.654-3.175.089-5.119-.713-5.581a2.327 2.327 0 00-1.868.089A10.194 10.194 0 0017.5 6.9a27.464 27.464 0 00-5.4 6.849z" fill="#00d8ff"></path><path xmlns="http://www.w3.org/2000/svg" d="M21.677 28.456c-1.355 0-3.076-.82-4.868-2.361a28.756 28.756 0 01-5.747-7.237 28.676 28.676 0 01-3.374-8.471 11.376 11.376 0 01-.158-4A3.391 3.391 0 018.964 3.9c1.487-.861 4.01.024 6.585 2.31a28.8 28.8 0 015.39 6.934 28.384 28.384 0 013.41 8.287 11.3 11.3 0 01.137 4.146 3.543 3.543 0 01-1.494 2.555 2.59 2.59 0 01-1.315.324zm-9.58-10.2a27.949 27.949 0 005.492 6.929c2.249 1.935 4.033 2.351 4.8 1.9.8-.465 1.39-2.363.782-5.434A27.212 27.212 0 0019.9 13.74a27.6 27.6 0 00-5.145-6.64c-2.424-2.152-4.39-2.633-5.191-2.169a2.327 2.327 0 00-.855 1.662 10.194 10.194 0 00.153 3.565 27.465 27.465 0 003.236 8.1z" fill="#00d8ff"></path></svg>`
    },
    {
        name: 'Python',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><defs xmlns="http://www.w3.org/2000/svg"><linearGradient id="python_svg__a" x1="-133.268" y1="-202.91" x2="-133.198" y2="-202.84" gradientTransform="matrix(189.38 0 0 189.81 25243.061 38519.17)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#387eb8"></stop><stop offset="1" stop-color="#366994"></stop></linearGradient><linearGradient id="python_svg__b" x1="-133.575" y1="-203.203" x2="-133.495" y2="-203.133" gradientTransform="matrix(189.38 0 0 189.81 25309.061 38583.42)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe052"></stop><stop offset="1" stop-color="#ffc331"></stop></linearGradient></defs><path xmlns="http://www.w3.org/2000/svg" d="M15.885 2.1c-7.1 0-6.651 3.07-6.651 3.07v3.19h6.752v1H6.545S2 8.8 2 16.005s4.013 6.912 4.013 6.912H8.33v-3.361s-.13-4.013 3.9-4.013h6.762s3.772.06 3.772-3.652V5.8s.572-3.712-6.842-3.712zm-3.732 2.137a1.214 1.214 0 11-1.183 1.244v-.02a1.214 1.214 0 011.214-1.214z" fill="url(#python_svg__a)"></path><path xmlns="http://www.w3.org/2000/svg" d="M16.085 29.91c7.1 0 6.651-3.08 6.651-3.08v-3.18h-6.751v-1h9.47S30 23.158 30 15.995s-4.013-6.912-4.013-6.912H23.64V12.4s.13 4.013-3.9 4.013h-6.765S9.2 16.356 9.2 20.068V26.2s-.572 3.712 6.842 3.712h.04zm3.732-2.147A1.214 1.214 0 1121 26.519v.03a1.214 1.214 0 01-1.214 1.214h.03z" fill="url(#python_svg__b)"></path></svg>`
    },
    {
        name: 'Node.JS',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M16 30a2.151 2.151 0 01-1.076-.288L11.5 27.685c-.511-.286-.262-.387-.093-.446a6.828 6.828 0 001.549-.7.263.263 0 01.255.019l2.631 1.563a.34.34 0 00.318 0l10.26-5.922a.323.323 0 00.157-.278V10.075a.331.331 0 00-.159-.283l-10.26-5.917a.323.323 0 00-.317 0L5.587 9.794a.33.33 0 00-.162.281v11.841a.315.315 0 00.161.274L8.4 23.814c1.525.762 2.459-.136 2.459-1.038V11.085a.3.3 0 01.3-.3h1.3a.3.3 0 01.3.3v11.692c0 2.035-1.108 3.2-3.038 3.2a4.389 4.389 0 01-2.363-.642l-2.697-1.547a2.166 2.166 0 01-1.076-1.872V10.075A2.162 2.162 0 014.661 8.2l10.261-5.924a2.246 2.246 0 012.156 0L27.338 8.2a2.165 2.165 0 011.077 1.87v11.846a2.171 2.171 0 01-1.077 1.872l-10.26 5.924A2.152 2.152 0 0116 30z" fill="#83cd29"></path><path xmlns="http://www.w3.org/2000/svg" d="M14.054 17.953a.3.3 0 01.3-.3h1.327a.3.3 0 01.295.251c.2 1.351.8 2.032 3.513 2.032 2.161 0 3.082-.489 3.082-1.636 0-.661-.261-1.152-3.62-1.481-2.808-.278-4.544-.9-4.544-3.144 0-2.07 1.745-3.305 4.67-3.305 3.287 0 4.914 1.141 5.12 3.589a.3.3 0 01-.295.323h-1.336a.3.3 0 01-.288-.232c-.319-1.421-1.1-1.875-3.2-1.875-2.36 0-2.634.822-2.634 1.438 0 .746.324.964 3.51 1.385 3.153.417 4.651 1.007 4.651 3.223 0 2.236-1.864 3.516-5.115 3.516-4.495.006-5.436-2.055-5.436-3.784z" fill="#83cd29"></path></svg>`
    },
    // {
    //     name: 'N',
    //     icon: ` `
    // },
    {
        name: 'Linux',
        icon: ` `
    },
    {
        name: 'GitHub',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" x="3082">
        <title xmlns="http://www.w3.org/2000/svg">GitHub icon</title><path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
        </svg>`
    },
    {
        name: 'Organization',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" preserveAspectRatio="xMidYMid meet"><g xmlns="http://www.w3.org/2000/svg" id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="tic-tac-toe"><path d="M8 16A8 8 0 108 0a8 8 0 000 16zm0-2A6 6 0 108 2a6 6 0 000 12zm33.414-6l5.95-5.95L45.95.636 40 6.586 34.05.636 32.636 2.05 38.586 8l-5.95 5.95 1.414 1.414L40 9.414l5.95 5.95 1.414-1.414L41.414 8zM40 48a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12zM9.414 40l5.95-5.95-1.414-1.414L8 38.586l-5.95-5.95L.636 34.05 6.586 40l-5.95 5.95 1.414 1.414L8 41.414l5.95 5.95 1.414-1.414L9.414 40z" id="Combined-Shape"></path></g></g></svg>`
    },
    {
        name: 'Collaboration',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" preserveAspectRatio="xMidYMid meet"><g xmlns="http://www.w3.org/2000/svg" id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="connections"><path d="M36 0H0v36h36V0zM15.126 2H2v13.126c.367.094.714.24 1.032.428L15.554 3.032A3.976 3.976 0 0115.126 2zM18 4.874V18H4.874a3.976 3.976 0 00-.428-1.032L16.968 4.446c.318.188.665.334 1.032.428zM22.874 2h11.712L20 16.586V4.874A4.007 4.007 0 0022.874 2zm10.252 18H20v13.126c.367.094.714.24 1.032.428l12.522-12.522A3.976 3.976 0 0133.126 20zM36 22.874V36H22.874a3.976 3.976 0 00-.428-1.032l12.522-12.522c.318.188.665.334 1.032.428zm0-7.748V3.414L21.414 18h11.712A4.007 4.007 0 0136 15.126zm-18 18V21.414L3.414 36h11.712A4.007 4.007 0 0118 33.126zM4.874 20h11.712L2 34.586V22.874A4.007 4.007 0 004.874 20z" id="Combined-Shape"></path></g></g></svg>`
    },
    {
        name: 'Creative Direction',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" preserveAspectRatio="xMidYMid meet"><g xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd"><path d="M77.17 0H80v2.83l-.1.1A39.9 39.9 0 0174.64 20a39.9 39.9 0 015.24 17.06l.11.11v2.89c-.01 6.9-1.8 13.79-5.35 19.94A39.96 39.96 0 0180 79.94V80h-2.83L66.84 69.66a39.83 39.83 0 01-24.1 10.25l.09.09h-5.66l.1-.1c-8.7-.58-17.22-4-24.1-10.23L2.82 80H0v-.06c.01-6.9 1.8-13.8 5.35-19.94A39.96 39.96 0 010 40.06v-2.89l.1-.1A39.9 39.9 0 015.36 20 39.9 39.9 0 01.1 2.94L0 2.83V0h2.83l-.1.1a39.83 39.83 0 0124.1 10.24L37.18 0H40c0 6.92-1.78 13.83-5.35 20A39.96 39.96 0 0140 40c0-6.92 1.78-13.83 5.35-20A39.96 39.96 0 0140 0h2.83l10.33 10.34A39.83 39.83 0 0177.26.09L77.17 0zm.77 77.94c-.3-5.52-1.8-11-4.49-16a40.18 40.18 0 01-5.17 6.34l9.66 9.66zm-12.52-9.7l-6.83-6.83-5.46 5.46-1.41 1.41-9.66 9.66c8.4-.45 16.69-3.68 23.36-9.7zm-23.07 6.58l7.99-7.98a40.05 40.05 0 01-3.79-4.9 37.88 37.88 0 00-4.2 12.88zM47.68 60a37.98 37.98 0 004.07 5.42L57.17 60l-5.42-5.42A38 38 0 0047.68 60zm2.66-6.84a40.06 40.06 0 00-3.79 4.9 37.88 37.88 0 01-4.2-12.88l7.99 7.98zm1.38-1.44l1.41 1.41 5.46 5.46 6.83-6.84a37.85 37.85 0 00-23.36-9.7l9.66 9.67zM60 60l6.87 6.87A38.1 38.1 0 0072.32 60a38.11 38.11 0 00-5.45-6.87L60 60zm-14.65 0a39.9 39.9 0 00-5.24 17.06l-.11.11-.1-.1A39.9 39.9 0 0034.64 60a39.9 39.9 0 005.24-17.06l.11-.11.1.1A39.9 39.9 0 0045.36 60zm9.23-48.25a37.85 37.85 0 0123.36-9.7l-9.66 9.67-1.41 1.41-5.46 5.46-6.83-6.84zm13.67 13.67L62.83 20l5.42-5.42A38 38 0 0172.32 20a37.98 37.98 0 01-4.07 5.42zm5.2-3.47a40.05 40.05 0 01-3.79 4.89l7.99 7.98c-.61-4.45-2.01-8.82-4.2-12.87zm-6.58 4.92l1.41 1.41 9.66 9.66a37.85 37.85 0 01-23.36-9.7l6.83-6.83 5.46 5.46zM53.13 13.13L60 20l-6.87 6.87A38.11 38.11 0 0147.68 20a38.1 38.1 0 015.45-6.87zm-1.41-1.41l-9.66-9.66c.3 5.52 1.8 11 4.49 16a40.18 40.18 0 015.17-6.34zm-9.66 26.22c.3-5.52 1.8-11 4.49-16a40.18 40.18 0 005.17 6.34l-9.66 9.66zm26.22 13.78l9.66-9.66c-.3 5.52-1.8 11-4.49 16a40.18 40.18 0 00-5.17-6.34zm8.98-11.81L66.84 50.34a39.83 39.83 0 00-24.1-10.25l10.42-10.43a39.83 39.83 0 0024.1 10.25zm-7.6-26.75a40.06 40.06 0 013.79 4.9 37.88 37.88 0 004.2-12.88l-7.99 7.98zm-31.72 28.9c-8.4.45-16.69 3.68-23.36 9.7l6.83 6.83 5.46-5.46 1.41-1.41 9.66-9.66zM22.83 60l5.42 5.42c1.54-1.7 2.9-3.52 4.07-5.42a38 38 0 00-4.07-5.42L22.83 60zm5.45 8.28l-1.41-1.41-5.46-5.46-6.83 6.84a37.85 37.85 0 0023.36 9.7l-9.66-9.67zm9.37 6.54l-7.99-7.98a40.05 40.05 0 003.79-4.9 37.88 37.88 0 014.2 12.88zM20 60l-6.87-6.87A38.11 38.11 0 007.68 60a38.11 38.11 0 005.45 6.87L20 60zm17.26-19.9L26.84 29.65A39.83 39.83 0 012.74 39.9l10.42 10.43a39.83 39.83 0 0124.1-10.25zm-35.2 1.96l9.66 9.66a40.18 40.18 0 00-5.17 6.33c-2.7-5-4.2-10.47-4.5-16zm4.49 19.89c-2.7 5-4.2 10.47-4.5 16l9.67-9.67a40.18 40.18 0 01-5.17-6.33zm31.1-16.77c-.61 4.45-2.01 8.82-4.2 12.87a40.06 40.06 0 00-3.79-4.89l7.99-7.98zm-4.2-23.23c2.7 5 4.2 10.47 4.5 16l-9.67-9.67c1.97-1.97 3.7-4.1 5.17-6.33zm-14.86-.54l6.83 6.84a37.85 37.85 0 01-23.36 9.7l9.66-9.67 1.41-1.41 5.46-5.46zm-8.25 5.43l-7.99 7.98c.61-4.45 2.01-8.82 4.2-12.87a40.04 40.04 0 003.79 4.89zm1.41-1.42A37.99 37.99 0 017.68 20a38 38 0 014.07-5.42L17.17 20l-5.42 5.42zm-5.2-7.37a40.04 40.04 0 013.79-4.89L2.35 5.18c.61 4.45 2.01 8.82 4.2 12.87zm6.58-4.92l-1.41-1.41-9.66-9.66a37.85 37.85 0 0123.36 9.7l-6.83 6.83-5.46-5.46zm13.74 13.74L20 20l6.87-6.87A38.1 38.1 0 0132.32 20a38.1 38.1 0 01-5.45 6.87zm6.58-8.82a40.18 40.18 0 00-5.17-6.33l9.66-9.66c-.3 5.52-1.8 11-4.49 16z" id="church-on-sunday"></path></g></svg>`
    },
    {
        name: 'Google',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path></svg>`
    },
    {
        name: 'StackOverflow',
        icon: `<svg fill="currentColor" width="28" height="28" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path xmlns="http://www.w3.org/2000/svg" d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.936v.014zm2.715-4.785l8.217 6.855 1.359-1.62-8.216-6.853-1.35 1.617-.01.001zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0h.002z"></path></svg>`
    },

]

function addToGrid(item, target) {
    let container = document.createElement('span')
    container.classList.add("grid-item")
    container.setAttribute("data-scroll", '');
    // container.setAttribute("data-scroll-class", 'expand');
    let name = document.createElement('span')
    name.classList.add('grid-details')
    name.innerText = item.name
    let icon = document.createElement('div')
    icon.classList.add('tech-icon')
    icon.innerHTML = item.icon
    container.appendChild(name)
    container.appendChild(icon)
    target.appendChild(container)
}
let panelLinks = [
    {
        name: 'Github',
        link: '1'
    },
    {
        name: 'Details',
        link: '2'
    },
    {
        name: 'View',
        link: '3'
    }
]
function addWorkToGrid(item, target) {
    let container = document.createElement('span')
    container.classList.add("grid-item")
    container.setAttribute("data-scroll", '');
    container.setAttribute("data-scroll-class", 'expand');


    let tags = document.createElement('span')
    tags.classList.add('tags')
    console.log(item.tags)

     item.tags.forEach((tag) => {

        if (tag !== "featured") {
        if(tag == "front" || tag == "back"){
         tag = tag + "-end"
        }
        tags.innerHTML = tag + ", "
    }
    })
    container.appendChild(tags)
    let gridItemBody = document.createElement('span')
    let gridItemImg = document.createElement('span')
    if (Object.keys(item).includes("img")) {
            gridItemImg.style.setProperty('--work-image-link', `url(../img/${item.img})`)
    }
    // gridItemImg.alt = "../img/main_avatar.jpg"
    let gridItemName = document.createElement('p')
      gridItemName.classList.add('grid_item__name')
      gridItemImg.classList.add('grid_item__img')
    gridItemBody.classList.add('grid-details')
    gridItemName.innerText = item.name
    gridItemBody.appendChild(gridItemImg)
    gridItemBody.appendChild(gridItemName)
    container.appendChild(gridItemBody)
    let panel = document.createElement('div')
    panel.classList.add('panel')
    panelLinks.forEach(panelLink => {
        let linkBtn = document.createElement('a')

            
        if (panelLink.name === 'Github') {
            linkBtn.style.display = item.source.trim() !== "" ? "block" : "none"
            linkBtn.href = item.source;
            linkBtn.innerHTML = `
            <svg fill="currentColor" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" preserveAspectRatio="xMaxYMax meet" >
            <title xmlns="http://www.w3.org/2000/svg">GitHub icon</title><path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>`
        }
        if (panelLink.name === 'Details') {
            linkBtn.href = "/work.html";
            console.log(item)
            console.log(worksList.indexOf(item))
            linkBtn.setAttribute("data-index", worksList.indexOf(item))
            linkBtn.style.display = item.desc.trim() !== "" ? "block" : "none"
            linkBtn.innerHTML = `
            <svg fill="currentColor" width="15" height="15" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" x="130">
            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>`
        }
        if (panelLink.name === 'View') {
            linkBtn.style.display = item.link.trim() !== "" ? "block" : "none"
            linkBtn.href = item.link;
            linkBtn.innerHTML = `
            <svg width="15" height="15" stroke="currentColor" fill="none" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" data-attributes-set=",xmlns:xlink,xmlns,viewBox,preserveAspectRatio,xmlns:xlink,xmlns,viewBox,preserveAspectRatio"><path xmlns="http://www.w3.org/2000/svg" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            `
        }
        panel.appendChild(linkBtn)
    })
    container.appendChild(panel)
    target.appendChild(container)
}

if(worksGrid != null){
     worksList.forEach(work => {
// ADD CONDITION
if (true){


    addWorkToGrid(work, worksGrid)
    scroll.update()
}
})
}

if(skillsGrid != null){
     skillsList.forEach(skill => {
// ADD CONDITION
if (true){


    addToGrid(skill, skillsGrid)
    scroll.update()
}
})
}


// For the titles

// For the contact form
async function postData( url = "", data = {}) {
    console.log(data)
    const response = await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "text/html"
        },
        body: JSON.stringify(data)
    })
    // return response.json()
    return response.json()
}
// if(contactForm != null){
//     contactForm.addEventListener('submit', () => {
//     event.preventDefault()
//     let contactName = contactForm.querySelector('#name').value
//     let contactEmail = contactForm.querySelector('#email').value
//     let contactMessage = contactForm.querySelector('#message').value
//     contactForm.querySelector('#name').value = ''
//     contactForm.querySelector('#email').value = ''
//     contactForm.querySelector('#message').value = ''
//     postData("https://veldora.herokuapp.com/collections/send/vel998642Ptt",{
//         name: "ji"
//     }).then(res => {

//     let errorBubble = document.createElement('div')
//     errorBubble.innerText = 'Message Sent! ✌🏾✌🏾✌🏾'
//     errorBubble.classList.add('error-bubble')
//     contactForm.appendChild(errorBubble)
//     errorBubble.addEventListener('animationend', () => {
//         contactForm.removeChild(errorBubble)
//     })
//     .catch(err => console.log(err))
//     })

// })
// }
