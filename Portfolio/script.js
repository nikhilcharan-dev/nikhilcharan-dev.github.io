const audio = document.querySelector('#audio');
const link = document.querySelector('.link');

document.addEventListener('click', () => {
    audio.play();
});

const updateStarColors = () => {
    const stars = document.querySelectorAll('.star');
    const currentTheme = localStorage.getItem('theme') || 'light';

    if(currentTheme === 'dark') {
        link.setAttribute('style', 'color: lightgray !important');
    } else {
        link.setAttribute('style', 'color: black !important');
    }

    stars.forEach(star => {
      if (currentTheme === 'dark') {
        star.style.backgroundColor = 'white';
      } else {
        star.style.backgroundColor = 'black';
      }
    });

  }

  updateStarColors();


const toggleButton = document.querySelector('#toggle-btn');
const currentTheme = localStorage.getItem('theme') || 'light';

if(currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = '☀️';
    toggleButton.classList.remove('moon');
    toggleButton.classList.add('sun');
} else {
    document.body.classList.add('light-mode');
    toggleButton.textContent = '🌙';
    toggleButton.classList.remove('sun');
    toggleButton.classList.add('moon');
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    const islight = document.body.classList.contains('light-mode');
    toggleButton.textContent = islight? '🌙' : '☀️';
    toggleButton.classList.toggle('moon');
    toggleButton.classList.toggle('sun');

    localStorage.setItem('theme', islight? 'light' : 'dark');
    updateStarColors();
});



const starsContainer = document.getElementById('stars');
const numStars = 111;

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function createStar() {
  var isAsteriod = Math.random() < 0.1;

  const star = document.createElement('div');
  star.classList.add( isAsteriod? 'asteriod' : 'star');

  if(isAsteriod) {
    if(currentTheme === 'dark') {
        star.style.backgroundColor = 'white';
    } else {
        star.style.backgroundColor = 'black';
    }
  } else {
    star.style.backgroundColor = 'gray'
  }

  const initialLeft = getRandomNumber(0, 100);
  const initialBottom = getRandomNumber(0, 100);

  star.style.position = 'absolute';
  star.style.left = `${initialLeft}vw`;
  star.style.bottom = `${initialBottom}vh`;

  if(isAsteriod) {
    const size = getRandomNumber(3, 5);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
  } else {
    const size = getRandomNumber(1, 3);
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
  }

  star.style.animation = `move ${getRandomNumber(5, 15)}s linear infinite`;

  starsContainer.appendChild(star);
}

const createStars = () => {
  for (let i = 0; i < numStars; i++) {
    createStar();
  }
}

const deleteStar = () => {
    const stars = document.querySelectorAll('.star');
    const randIndex = Math.floor(Math.random() * stars.length);
    starsContainer.removeChild(stars[randIndex]);
}

const deleteStars = () => {
    for(i = 0; i < 5; i++) {
        deleteStar();
    }
    
}

createStars();

setInterval(() => {
  const stars = document.querySelectorAll('.star');
  if (stars.length < numStars) {
    createStar();
  } else {

    deleteStar();
  }
}, 5000);


// function moveStar(element) {
//   setInterval(() => {
//     const direction = Math.random() < 0.5 ? 'left' : 'right';
//     var rect = element.getBoundingClientRect();
//     var maxWidth = window.innerWidth - rect.width;
//     var maxHeight = window.innerHeight - rect.height;
//     if (direction === 'left') {
//         xPos = Math.random() * maxWidth / 2;
//     } else {
//         xPos = (Math.random() * (maxWidth / 2)) + (maxWidth / 2);
//     }
//     var yPos = Math.random() * maxHeight;
    
//     element.style.left = xPos + 'px';
//     element.style.top = yPos + 'px';
//   }, 3000);
// }
