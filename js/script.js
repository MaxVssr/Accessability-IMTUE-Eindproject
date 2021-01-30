let modal = document.getElementsByClassName("modal");
let button = document.getElementsByClassName("card__body__buttons__readmore");
let close_button = document.getElementsByClassName("fas fa-times");
let img = document.getElementsByClassName("card__img");
let order = document.getElementsByClassName("card__body__buttons__order");

 for(let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function(evt){
        modal[i].style.display = "block";
        modal[i].focus();
    });
 }

 for(let i = 0; i < close_button.length; i++) {
    close_button[i].addEventListener("click", function(evt){
        modal[i].style.display = "none";
    });
 }