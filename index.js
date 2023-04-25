const rows = [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '<i class="fa-solid fa-caret-up"></i>', 'Shift'],
    ['Ctrl', 'Win', 'Alt', '', 'Alt', '<i class="fa-solid fa-caret-left"></i>', '<i class="fa-solid fa-caret-down"></i>', '<i class="fa-solid fa-caret-right"></i>', 'Ctrl']
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
    for (elem of rows[i]) {
        addButton(row, elem)
    }
}

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