let userAgent = navigator.userAgent.toLowerCase();
let android = userAgent.indexOf("android") > -1;

document.querySelectorAll('.button').forEach(button => {

  let div = document.createElement('div'),
    letters = button.textContent.trim().split('');

  function elements(letter, index, array) {

    let element = document.createElement('span'),
      part = (index >= array.length / 2) ? -1 : 1,
      position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index,
      move = position / (array.length / 2),
      rotate = 1 - move;

    element.innerHTML = !letter.trim() ? '&nbsp;' : letter;
    element.style.setProperty('--move', move);
    element.style.setProperty('--rotate', rotate);
    element.style.setProperty('--part', part);

    div.appendChild(element);

  }

  letters.forEach(elements);

  button.innerHTML = div.outerHTML;

  button.addEventListener('touchstart', e => {
    if (android && !button.classList.contains('button-out')) {
      button.classList.add('button-in');
    }
  });

  button.addEventListener('mouseenter', e => {
    if (!button.classList.contains('button-out')) {
      button.classList.add('button-in');
    }
  });

  button.addEventListener('mouseleave', e => {
    if (button.classList.contains('button-in')) {
      button.classList.add('button-out');
      setTimeout(() => button.classList.remove('button-in', 'button-out'), 95);
    }
  });

  button.addEventListener('touchend', e => {
    console.log('5');
    setTimeout(() => {
      if (android && button.classList.contains('button-in')) {
        button.classList.add('button-out');
        console.log('help');
        button.classList.remove('button-in', 'button-out')
      }
    }, 995);

  });

});
