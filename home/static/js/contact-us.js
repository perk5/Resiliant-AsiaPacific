let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');
let header = document.querySelector('.header');


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    if (navbar.classList.contains('active')) {
            // Keep the menu open while scrolling


            // Uncomment the next two lines to close it on scroll
            // menu.classList.remove('fa-times');
            // navbar.classList.remove('active');
        }

    if(window.scrollY > 0){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}

document.addEventListener('click', function(event) {
    if (!navbar.contains(event.target) && !menu.contains(event.target)) {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
});


const inputs = document.querySelectorAll(".input");

function blurFunc(){
    let parent = this.parentNode;
    if (this.value == ""){
        parent.classList.remove("focus");
    }

}

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}


inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});