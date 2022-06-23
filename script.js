
// прелоадер
window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');
    setInterval(function() {
          preloader.classList.add('preloader-hidden');
    }, 1200);
}


// апбатон
setInterval(() => {
    if (window.pageYOffset < window.innerHeight){
    document.querySelector('#upbutton').style.opacity = 0;
    document.querySelector('#upbutton').style.visibility = 'hidden';
}
else{
    document.querySelector('#upbutton').style.opacity = 1;
    document.querySelector('#upbutton').style.visibility = 'visible';
}
}, 500);