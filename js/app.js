console.log(`Hi ${navigator.userAgent.toLowerCase()}`);
const body = document.querySelector("body");
const skillsGrid = document.querySelector('#skills .grid')
const worksGrid = document.querySelector('#works .grid')
const header = document.querySelector('header')
const menuBtn = document.querySelector("#ham")

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
        name: 'BootStrap',
        icon: ``
    },
    {
        name: 'Wordpress',
        icon: ` `
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
        icon: ` `
    },
    {
        name: 'Collaboration',
        icon: ` `
    },
    {
        name: 'Creative Direction',
        icon: ` `
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
const works = "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11"
//const stack = "HTML, CSS, Sass, JS, BootStrap, Wordpress, React, PHP, Python, Node.JS, MongoDB, MySQL, Express, Java, C, Nginx, Linux, REST, Apache, Illustrator, Adobe XD, Photoshop, GitHub, Organization, Collaboration, Design, Google, StackOverflow"
const navMenu = document.querySelector('#nav-menu')
const contactForm = document.querySelector('#contact-form')
const contactFormName = document.querySelector('#contact-form #name')

let worksList = works.split(", ")
let menuIsOpen = false
function addToGrid(item, target) {
    let container = document.createElement('span')
    container.classList.add("grid-item")
    container.setAttribute("data-scroll", '');
    container.setAttribute("data-scroll-class", 'expand');
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
    let name = document.createElement('span')
    name.classList.add('grid-details')
    name.innerText = item
    container.appendChild(name)
    let panel = document.createElement('div')
    panel.classList.add('panel')
    panelLinks.forEach(panelLink => {
        let linkBtn = document.createElement('button')
        if (panelLink.name === 'Github') {
            linkBtn.innerHTML = `
            <svg fill="currentColor" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" x="3082">
            <title xmlns="http://www.w3.org/2000/svg">GitHub icon</title><path xmlns="http://www.w3.org/2000/svg" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
            </svg>`
        }
        if (panelLink.name === 'Details') {
            linkBtn.innerHTML = `
            <svg fill="currentColor" width="15" height="15" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" preserveAspectRatio="xMidYMid meet" x="130">
            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>`
        }
        if (panelLink.name === 'View') {
            linkBtn.innerHTML = `
        <img src="https://s.svgbox.net/hero-outline.svg?ic=arrow-right&fill=fff" width="15" height="15">`
        }
        panel.appendChild(linkBtn)
    })
    container.appendChild(panel)
    target.appendChild(container)
}
{/* <div>
                <button>G</button>
                <button>D</button>
                <button>V</button>
              </div> */}

skillsList.forEach(skill => addToGrid(skill, skillsGrid))
worksList.forEach(work => addWorkToGrid(work, worksGrid))

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