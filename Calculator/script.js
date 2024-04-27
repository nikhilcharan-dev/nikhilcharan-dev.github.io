screen = document.getElementById('display');

function appendValue(value) {
    screen.value += value;
}

function flush() {
    screen.value = '';
}

function del() {
    var value = screen.value;
    if(value.length < 2) {
        flush();
    } else {
        var newValue = value.substring(0, value.length - 1);
        screen.value = newValue;
    }
}

function compute() {
    var expression = screen.value.trim();
    var result;
    try {
        result = eval(expression);
    } catch(error) {
        result = 'Error';
    }
    screen.value = result;
    if(result == '143') {
        joyboy();
    }
}

function joyboy() {
    sound = document.getElementById('sfx');
    sound.play();
    window.alert("Unlocked Easter Egg!!");
}

// stars
var star2 = document.getElementById('star1');
var star1 = document.getElementById('star2');

function moveElement(element, direction) {
    var rect = element.getBoundingClientRect();
    var maxWidth = window.innerWidth - rect.width;
    var maxHeight = window.innerHeight - rect.height;
    if (direction === 'left') {
        xPos = Math.random() * maxWidth / 2;
    } else {
        xPos = (Math.random() * (maxWidth / 2)) + (maxWidth / 2);
    }
    var yPos = Math.random() * maxHeight;
    
    element.style.left = xPos + 'px';
    element.style.top = yPos + 'px';
}

moveElement(star1, 'left');
moveElement(star2, 'right');

setInterval(function() {
    moveElement(star1, 'left');
    moveElement(star2, 'right');
}, 5000);
