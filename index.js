let lang = 'en';

const rows_en = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '<i class="fa-solid fa-caret-up"></i>', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-down"></i>', '<i class="fa-solid fa-caret-right"></i>', 'Ctrl']
];

const rows_rus = [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '<i class="fa-solid fa-caret-up"></i>', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-down"></i>', '<i class="fa-solid fa-caret-right"></i>', 'Ctrl']
];

const codes = [
    ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
    ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'racketRight', 'Backslash', 'Delete'],
    ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', "Quote", 'Enter'],
    ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
    ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight']
];

function addRow(parent) {
    const row = document.createElement('div');
    row.classList.add('row');
    parent.appendChild(row)
    return row;
}

function addButton(parent, char) {
    const button = document.createElement('div');
    button.classList.add('button');
    button.innerHTML = char;
    button.addEventListener('click', printText)
    parent.appendChild(button)
}

function printText(event) {
    textArea.innerHTML+=event.target.textContent;
}

function switchLanguage() {
    if (lang === 'en') {
        for (let i=1; i<4; i++) {
            for (let j=0; j<rows_rus[i].length; j++) {
                buttonRows[i].children[j].textContent=rows_rus[i][j];
            }
        }
        lang = 'rus';
    } else {
        for (let i=1; i<4; i++) {
            for (let j=1; j<rows_en[i].length; j++) {
                buttonRows[i].children[j].textContent=rows_en[i][j];
            }
        }
        lang = 'en';
        }
    buttonRows[3].children[11].innerHTML = '<i class="fa-solid fa-caret-up"></i>';
    }

const title = document.createElement('h1');
title.textContent = 'RSS Virtual Keyboard';
title.classList.add('title');
document.querySelector('body').appendChild(title)

const textArea = document.createElement('textarea');
textArea.placeholder = 'Нажмите клавишу виртуальной клавиатуры';
textArea.classList.add('textarea')
document.querySelector('body').appendChild(textArea)

const keyboard = document.createElement('section');
keyboard.classList.add('keyboard')
document.querySelector('body').appendChild(keyboard)

for (let i=0; i<5; i++) {
    const row = addRow(keyboard);
    for (elem of rows_en[i]) {
        addButton(row, elem)
    }
}

const buttonRows = document.querySelectorAll('.row');
const buttons = document.querySelectorAll('.button');

for (elem of buttons) {
    if (elem.textContent === 'Shift' ||
    elem.textContent === 'Enter' ||
    elem.textContent === 'CapsLock' ||
    elem.textContent === 'Backspace') {
        elem.classList.add('button-long')
    } else if (elem.innerHTML === '') {
        elem.classList.add('button-space')
    }
}