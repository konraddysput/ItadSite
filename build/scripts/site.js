$(function(){
    initializeComponents();

})

function initializeComponents(){
    //enable bootstrap material design
    $.material.init();

    //set carousels
    $('.carousel').carousel({
        interval: 2000
    });
}