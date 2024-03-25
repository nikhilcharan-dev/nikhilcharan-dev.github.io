const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas', 'fa-heart');
    
    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset;
    const yInside = y - topOffset;
    
    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    for (let i = 0; i < 10; i++) {
        const smallerHeart = document.createElement('i');
        smallerHeart.classList.add('fas', 'fa-heart');
        smallerHeart.style.position = 'absolute';
        smallerHeart.style.top = `${yInside}px`;
        smallerHeart.style.left = `${xInside}px`;
        smallerHeart.style.fontSize = `${Math.random() * 20 + 5}px`;
        loveMe.appendChild(smallerHeart);

        setTimeout(() => {
            smallerHeart.style.top = `${yInside - Math.random() * 100}px`;
            smallerHeart.style.left = `${xInside - Math.random() * 100}px`;
            smallerHeart.style.opacity = '0';
        }, 10);
    }

    times.innerHTML = ++timesClicked;

    setTimeout(() => heart.remove(), 1000);
};
