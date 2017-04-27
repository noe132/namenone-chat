document.addEventListener('DOMContentLoaded', function() {
    let img = document.createElement('img');
    let path = `/static/img/background/${Math.floor(Math.random()*9 + 1)}.jpg`;
    img.addEventListener('load', function() {
        setTimeout(() => {
            document.querySelector('.user-background-blur-custom').style.backgroundImage = `url(${path})`;
            document.querySelector('.user-background-blur-custom').style.opacity = '1';
            document.querySelector('.user-background-blur').style.opacity = '0';
        }, 1500);
    }, false);
    img.src = path;
}, false);
