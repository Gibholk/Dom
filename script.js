const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.textContent = 'Нажми меня';
});

const container = document.querySelector('.container');
if (container) {
    container.classList.add('active');
}

const parent = document.getElementById('parent');
if (parent) {
    const descendants = parent.querySelectorAll('*');
    console.log('Количество :', descendants.length);
}

const target = document.getElementById('target');
if (target && target.parentElement) {
    const siblings = Array.from(target.parentElement.children)
        .filter(el => el !== target && el.classList.contains('sibling'));
    console.log('Sibling elements:', siblings);
}


