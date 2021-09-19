const setBackground = () => {
    let p1 = document.querySelector('.first');
    let p2 = document.querySelector('.last');

    p1.style.backgroundColor = 'red';
    p2.style.backgroundColor = 'yellow';
}

let btnSetBakcground = document.getElementById('set-background');

btnSetBakcground.addEventListener('click', setBackground);