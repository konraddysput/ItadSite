$(function(){
    initializeComponents();

})

function initializeComponents(){
    //enable bootstrap material design
    $.material.init();

    //set carousels
    $('.carousel').carousel({
        interval: 5000
    });
    initTimeline();
    initOwlCarousel();
}

function initOwlCarousel(){
      $("#media-partners").owlCarousel();
}

function initTimeline(){
    $('.timeline').timelify({
        animLeft: "fadeInRight",
        // animLeft: "",
		animRight: "fadeInLeft",
		animSpeed: 600,
		offset: 0
	});
}