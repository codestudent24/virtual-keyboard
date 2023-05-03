let lang = localStorage.getItem('lang') === undefined ? 'en' : localStorage.getItem('lang');

const keyButtons = {
  shift: false,
  capsLock: false,
  alt: false,
};

const rowsEn = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '<i class="fa-solid fa-caret-up"></i>', 'Shift'],
  ['Ctrl', 'Win', 'Alt', '', 'Alt', '<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-down"></i>', '<i class="fa-solid fa-caret-right"></i>', 'Ctrl'],
];

const rowsEnShifted = [
  ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '<i class="fa-solid fa-caret-up"></i>', 'Shift'],
  ['Ctrl', 'Win', 'Alt', '', 'Alt', '<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-down"></i>', '<i class="fa-solid fa-caret-right"></i>', 'Ctrl'],
];

const rowsRusShifted = [
  ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
  ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
  ['CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
  ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '<i class="fa-solid fa-caret-up"></i>', 'Shift'],
  ['Ctrl', 'Win', 'Alt', '', 'Alt', '<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-down"></i>', '<i class="fa-solid fa-caret-right"></i>', 'Ctrl'],
];

const rowsRus = [
  ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
  ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
  ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '<i class="fa-solid fa-caret-up"></i>', 'Shift'],
  ['Ctrl', 'Win', 'Alt', '', 'Alt', '<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-down"></i>', '<i class="fa-solid fa-caret-right"></i>', 'Ctrl'],
];

const codes = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'],
];

const title = document.createElement('h1');
title.textContent = 'RSS Virtual Keyboard';
title.classList.add('title');
document.querySelector('body').appendChild(title);

const textArea = document.createElement('textarea');
textArea.placeholder = 'Нажмите клавишу виртуальной клавиатуры';
textArea.classList.add('textarea');
document.querySelector('body').appendChild(textArea);

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard');
document.querySelector('body').appendChild(keyboard);

const textP = document.createElement('p');
textP.classList.add('prompt');
textP.textContent = 'Press left Shift + Alt to switch language';
document.querySelector('body').appendChild(textP);

class Btn {
  constructor(char, code) {
    this.char = char;
    this.code = code;
  }

  addButton(parent) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.innerHTML = this.char;
    button.id = this.code;
    parent.appendChild(button);
  }
}

function addRow(parent) {
  const row = document.createElement('div');
  row.classList.add('row');
  parent.appendChild(row);
  return row;
}

for (let i = 0; i < 5; i += 1) {
  const row = addRow(keyboard);
  if (lang === 'en') {
    for (let j = 0; j < rowsEn[i].length; j += 1) {
      const button = new Btn(rowsEn[i][j], codes[i][j]);
      button.addButton(row);
    }
  } else {
    for (let j = 0; j < rowsRus[i].length; j += 1) {
      const button = new Btn(rowsRus[i][j], codes[i][j]);
      button.addButton(row);
    }
  }
}

const buttonRows = document.querySelectorAll('.row');
const buttons = document.querySelectorAll('.button');

for (let i = 0; i < buttons.length; i += 1) {
  if (buttons[i].textContent === 'Shift'
  || buttons[i].textContent === 'Enter'
  || buttons[i].textContent === 'CapsLock'
  || buttons[i].textContent === 'Backspace') {
    buttons[i].classList.add('button-long');
  } else if (buttons[i].innerHTML === '') {
    buttons[i].classList.add('button-space');
  }
}

function printText(id) {
  let caretPosition = textArea.selectionStart;
  if (id === 'Tab') {
    textArea.innerHTML += '\t';
    caretPosition += 1;
  } else if (id.slice(0, 5) === 'Shift'
        || id.slice(0, 3) === 'Alt'
        || id.slice(0, 7) === 'Control'
        || id === 'CapsLock') {
    return;
  } else if (id === 'Enter') {
    textArea.innerHTML = `${textArea.innerHTML.slice(0, caretPosition)}\n${textArea.innerHTML.slice(caretPosition)}`;
    caretPosition += 1;
  } else if (id === 'Space') {
    textArea.innerHTML += ' ';
    caretPosition += 1;
  } else if (id === 'Backspace') {
    if (caretPosition > 0) {
      textArea.innerHTML = textArea.innerHTML.slice(0, caretPosition - 1)
      + textArea.innerHTML.slice(caretPosition);
    }
    caretPosition -= 1;
  } else if (id === 'Delete') {
    if (caretPosition < textArea.innerHTML.length) {
      textArea.innerHTML = textArea.innerHTML.slice(0, caretPosition)
      + textArea.innerHTML.slice(caretPosition + 1);
    }
  } else if (id === 'ArrowUp') {
    textArea.innerHTML = `${textArea.innerHTML.slice(0, caretPosition)}&#8679;${textArea.innerHTML.slice(caretPosition)}`;
    caretPosition += 1;
  } else if (id === 'ArrowLeft') {
    textArea.innerHTML = `${textArea.innerHTML.slice(0, caretPosition)}&#8678;${textArea.innerHTML.slice(caretPosition)}`;
    caretPosition += 1;
  } else if (id === 'ArrowDown') {
    textArea.innerHTML = `${textArea.innerHTML.slice(0, caretPosition)}&#8681;${textArea.innerHTML.slice(caretPosition)}`;
    caretPosition += 1;
  } else if (id === 'ArrowRight') {
    textArea.innerHTML = `${textArea.innerHTML.slice(0, caretPosition)}&#8680;${textArea.innerHTML.slice(caretPosition)}`;
    caretPosition += 1;
  } else {
    textArea.innerHTML = textArea.innerHTML.slice(0, caretPosition)
    + document.getElementById(id).textContent + textArea.innerHTML.slice(caretPosition);
    caretPosition += 1;
  }
  textArea.focus();
  textArea.selectionStart = caretPosition;
}

function setLanguage(language) {
  localStorage.setItem('lang', language);
}

function switchLanguage() {
  if (lang === 'en') {
    for (let i = 1; i < 4; i += 1) {
      for (let j = 0; j < rowsRus[i].length; j += 1) {
        buttonRows[i].children[j].textContent = rowsRus[i][j];
      }
    }
    lang = 'rus';
  } else {
    for (let i = 1; i < 4; i += 1) {
      for (let j = 0; j < rowsEn[i].length; j += 1) {
        buttonRows[i].children[j].textContent = rowsEn[i][j];
      }
    }
    lang = 'en';
  }
  buttonRows[3].children[11].innerHTML = '<i class="fa-solid fa-caret-up"></i>';

  setLanguage(lang);
}

function shiftPressed() {
  if (keyButtons.alt) {
    switchLanguage();
    return;
  }

  keyButtons.shift = true;

  if (lang === 'rus') {
    for (let i = 0; i < 4; i += 1) {
      if (keyButtons.capsLock) {
        for (let j = 1; j < rowsRus[i].length - 1; j += 1) {
          buttonRows[i].children[j].textContent = rowsRusShifted[i][j].toLowerCase();
        }
        buttonRows[0].children[0].textContent = 'ё';
      } else {
        for (let j = 1; j < rowsRus[i].length - 1; j += 1) {
          buttonRows[i].children[j].textContent = rowsRusShifted[i][j];
        }
        buttonRows[0].children[0].textContent = 'Ё';
      }
    }
  } else {
    for (let i = 0; i < 4; i += 1) {
      if (keyButtons.capsLock) {
        for (let j = 1; j < rowsEn[i].length - 1; j += 1) {
          buttonRows[i].children[j].textContent = rowsEnShifted[i][j].toLowerCase();
        }
      } else {
        for (let j = 1; j < rowsEn[i].length - 1; j += 1) {
          buttonRows[i].children[j].textContent = rowsEnShifted[i][j];
        }
      }
      buttonRows[0].children[0].textContent = '~';
    }
  }
  buttonRows[3].children[11].innerHTML = '<i class="fa-solid fa-caret-up"></i>';
  keyButtons.shift = true;
}

function shiftUnpressed() {
  keyButtons.shift = false;
  if (lang === 'rus') {
    for (let i = 0; i < 4; i += 1) {
      if (keyButtons.capsLock) {
        for (let j = 1; j < rowsRus[i].length - 1; j += 1) {
          buttonRows[i].children[j].textContent = rowsRus[i][j].toUpperCase();
        }
        buttonRows[0].children[0].textContent = 'Ё';
      } else {
        for (let j = 1; j < rowsRus[i].length - 1; j += 1) {
          buttonRows[i].children[j].textContent = rowsRus[i][j];
        }
        buttonRows[0].children[0].textContent = 'ё';
      }
    }
  } else {
    for (let i = 0; i < 4; i += 1) {
      if (keyButtons.capsLock) {
        for (let j = 1; j < rowsEn[i].length - 1; j += 1) {
          buttonRows[i].children[j].textContent = rowsEn[i][j].toUpperCase();
        }
      } else {
        for (let j = 1; j < rowsEn[i].length - 1; j += 1) {
          buttonRows[i].children[j].textContent = rowsEn[i][j];
        }
      }
      buttonRows[0].children[0].textContent = '`';
    }
  }
  buttonRows[3].children[11].innerHTML = '<i class="fa-solid fa-caret-up"></i>';
  keyButtons.shift = false;
}

function capsLockPressed() {
  if (!document.getElementById('CapsLock').classList.contains('button-pressed')) {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 1; j < rowsEn[i].length - 1; j += 1) {
        buttonRows[i].children[j].textContent = buttonRows[i]
          .children[j].textContent.toLocaleLowerCase();
      }
    }
    if (lang === 'rus') buttonRows[0].children[0].textContent = 'ё';
  } else {
    for (let i = 0; i < 4; i += 1) {
      for (let j = 1; j < rowsEn[i].length - 1; j += 1) {
        buttonRows[i].children[j].textContent = buttonRows[i]
          .children[j].textContent.toLocaleUpperCase();
      }
    }
    if (lang === 'rus') buttonRows[0].children[0].textContent = 'Ё';
  }
  buttonRows[3].children[11].innerHTML = '<i class="fa-solid fa-caret-up"></i>';
  keyButtons.capsLock = !keyButtons.capsLock;
}

function keyPressed(event) {
  event.preventDefault();
  const id = event.code;
  if (document.getElementById(id) === null) return;
  if (id === 'CapsLock') {
    document.getElementById(id).classList.toggle('button-pressed');
    capsLockPressed();
  } else if (id.slice(0, 5) === 'Shift') {
    document.getElementById(id).classList.add('button-pressed');
    shiftPressed();
  } else if (id.slice(0, 3) === 'Alt') {
    document.getElementById(id).classList.add('button-pressed');
    if (keyButtons.shift) {
      switchLanguage();
      return;
    }
    keyButtons.alt = true;
  } else {
    document.getElementById(id).classList.add('button-pressed');
  }
  printText(id);
}

function keyUnpressed(event) {
  const id = event.code;
  if (document.getElementById(id) === null) return;
  if (id === 'CapsLock') {
    // nothing
  } else if (id.slice(0, 5) === 'Shift') {
    document.getElementById(id).classList.remove('button-pressed');
    shiftUnpressed();
  } else if (id.slice(0, 3) === 'Alt') {
    document.getElementById(id).classList.remove('button-pressed');
    keyButtons.alt = false;
  } else {
    document.getElementById(id).classList.remove('button-pressed');
  }
}

keyboard.addEventListener('mousedown', (event) => {
  const target = event.target.closest('.button');
  if (target) {
    if (target.id === 'CapsLock') {
      target.classList.toggle('button-pressed');
      capsLockPressed();
    } else if (target.id === 'ShiftLeft'
    || target.id === 'ShiftRight') {
      target.classList.add('button-pressed');
      shiftPressed();
    } else {
      target.classList.add('button-pressed');
    }
    printText(target.id);
  }
});

keyboard.addEventListener('mouseup', (event) => {
  const target = event.target.closest('.button');
  if (target) {
    if (target.id === 'CapsLock') {
      // nothing
    } else if (target.id === 'ShiftLeft'
    || target.id === 'ShiftRight') {
      target.classList.remove('button-pressed');
      shiftUnpressed();
    } else {
      target.classList.remove('button-pressed');
    }
  }
});

document.addEventListener('keydown', keyPressed);
document.addEventListener('keyup', keyUnpressed);
