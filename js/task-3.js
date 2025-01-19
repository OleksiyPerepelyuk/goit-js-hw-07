const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

nameInput.addEventListener('input', function () {
    const name = nameInput.value.trim();
    nameOutput.textContent = name === '' ? 'Anonymous' : name;
});
