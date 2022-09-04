
const checkBox = document.getElementById('switch');
const elements = document.querySelectorAll('*');

const theme = {
    true: 'dark',
    false: 'light'
};

checkBox.addEventListener('click', (e) => {
    elements.forEach(element => {
        (
            element.className.includes('__') &&
            element.classList.replace(theme[!checkBox.checked] + '__' + element.className.split('__')[1], theme[checkBox.checked] + '__' + element.className.split('__')[1]));
    });
});