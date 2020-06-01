let loader = document.getElementById('pre-loader');
let html = document.getElementsByTagName('html');

document.onreadystatechange = function () {
    if (document.readyState == "complete") {

        /** Perform the css animation **/
        loader.style.animationName = 'fade';
        loader.style.animationDuration = '1s';
        loader.style.animationFillMode = 'forwards';
        loader.style.animationTimingFunction = 'ease-in';

        /** Remove the preloader-active class tot he HTML tag **/
        setTimeout(function () {
            html[0].classList.remove('preloader-active')
        }, 1000)
    }
}