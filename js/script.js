let modal = document.getElementsByClassName("modal");
let button = document.getElementsByClassName("card__body__buttons__readmore");
let close_button = document.getElementsByClassName("fas fa-times");
let img = document.getElementsByClassName("card__img");

let bodyScroll = document.getElementsByTagName("body")[0];

button[0].onclick = function(){
    modal[0].style.display = "block";
    bodyScroll.classList.toggle('noscroll');
};

close_button[0].onclick = function(){
    modal[0].style.display = "none";
};

button[1].onclick = function(){
    modal[1].style.display = "block";
    bodyScroll.classList.toggle('noscroll');
};

close_button[1].onclick = function(){
    modal[1].style.display = "none";
};

button[2].onclick = function(){
    modal[2].style.display = "block";
    bodyScroll.classList.toggle('noscroll');
};

close_button[2].onclick = function(){
    modal[2].style.display = "none";
};

button[3].onclick = function(){
    modal[3].style.display = "block";
    bodyScroll.classList.toggle('noscroll');
};

close_button[3].onclick = function(){
    modal[3].style.display = "none";
};

button[4].onclick = function(){
    modal[4].style.display = "block";
    bodyScroll.classList.toggle('noscroll');
};

close_button[4].onclick = function(){
    modal[4].style.display = "none";
};

button[5].onclick = function(){
    modal[5].style.display = "block";
    bodyScroll.classList.toggle('noscroll');
};

close_button[5].onclick = function(){
    modal[5].style.display = "none";
};

// img[0].onclick = function() {
//     modal[0].style.display = "block";
// }

// img[1].onclick = function() {
//     modal[1].style.display = "block";
// }

// img[2].onclick = function() {
//     modal[2].style.display = "block";
// }

// img[3].onclick = function() {
//     modal[3].style.display = "block";
// }

// img[4].onclick = function() {
//     modal[4].style.display = "block";
// }

// img[5].onclick = function() {
//     modal[5].style.display = "block";
// }