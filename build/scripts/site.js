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
    initTimeline();
}

function initTimeline(){
    $('.timeline').timelify({
			animLeft: "fadeInLeft",
		animCenter: "fadeInUp",
		animRight: "fadeInRight",
		animSpeed: 600,
		offset: 150
	});
}