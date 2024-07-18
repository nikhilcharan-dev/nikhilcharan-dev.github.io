
window.addEventListener('scroll', () => {
    let footer = document.querySelector('footer');
    if(window.scrollY === window.innerHeight) {
        footer.style.display = 'none';
    } else {
        footer.style.display = 'block';
    }
});
