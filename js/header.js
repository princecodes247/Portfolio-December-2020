let headers = document.querySelectorAll('.wave')

headers.forEach(header => {
    let text = header.innerText
    header.innerText = ''
    let max = header.getAttribute("data-wave-max") || 0.19
    let interval = header.getAttribute("data-wave-interval") || 0.02
    waver(text, header, max, interval, 1)

})

function waver(item, target, max, interval, speed, mode = 1) {
    switch (mode) {
        case 1:
            for (i = 0; i < item.length; i++) {
                let a = document.createElement('h2')
                let b = (i * interval).toFixed(2)
                let delay = (max - b).toFixed(2).toString()
                a.setAttribute('data-scroll', '')
                a.setAttribute('data-scroll-speed', speed)
                a.setAttribute('data-scroll-delay', delay)
                a.innerText = item[i]
                target.appendChild(a)
            }
            break;

        default:
            break;
    }
}

function centerWave(item, target, max, interval, speed) {
    let textCenter = Math.floor(item.length / 2)
    for (i = 0; i < item.length; i++) {
        let a = document.createElement('h2')
        let b = Math.abs((textCenter - i) * interval).toFixed(2)
        let delay = (max - b).toFixed(2).toString()
        a.setAttribute('data-scroll', '')
        a.setAttribute('data-scroll-speed', speed)
        a.setAttribute('data-scroll-delay', delay)
        a.innerText = item[i]
        target.appendChild(a)
    }
}

function endWave(item, target, max, interval, speed) {
    for (i = 0; i < item.length; i++) {
        let a = document.createElement('h2')
        let b = (i * (item.length - interval)).toFixed(2)
        let delay = (max - b).toFixed(2).toString()
        a.setAttribute('data-scroll', '')
        a.setAttribute('data-scroll-speed', speed)
        a.setAttribute('data-scroll-delay', delay)
        a.innerText = item[i]
        target.appendChild(a)
    }
}
