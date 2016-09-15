$(function(){
    initializeComponents();
    setupLogo();
})

function initializeComponents(){
    //enable bootstrap material design
    $.material.init();

    //set carousels
    $('.carousel').carousel({
        interval: 5000
    });
    //setup timer
    initTimeClock();
    $('[data-toggle="popover"]').popover();
     initTimeline();
}

function initTimeClock(){
        var clock = $('.clock').FlipClock({
                        clockFace: 'DailyCounter',
                        countdown: true
                        }),
            itadTime = new Date("Oct 19, 2016 13:30:00"),
            timeSpan = (itadTime.getTime() -  new Date().getTime())/1000;

        clock.setTime(timeSpan);
        clock.start();
}

function setupLogo(){
    var squareBeginning = "<div class='square logo-item itad-",
        squareEnd = "'></div>"
        times =0;

     $("#logo-square-content").find(".row").each(function(index){
        // times = Math.floor(Math.random() * 4) + 5 -index;
        times = 6;
         for(var i =0; i<index; i++){
            $(this).append(squareBeginning+0+squareEnd);
        }
        for(var i = 0; i<times; i++){
            var colorNumber = Math.floor(Math.random() * 9) + 1;
            $(this).append(squareBeginning+colorNumber+squareEnd);
        }

    });
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

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.hideme').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight()/2 - 350;
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });

});
