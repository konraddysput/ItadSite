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
    //setup timer
    initTimeClock();

    //setup timeline with agenda
    //use it if you want to display agenda with timeline styles 
    // initTimeline();

    //setup partners carousel
    //use it if you want to display mini carousel with partners
    // initOwlCarousel();

    $('[data-toggle="popover"]').popover();                  
}

// function initOwlCarousel(){
//       $("#media-partners").owlCarousel();
// }

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

// function initTimeline(){
//     $('.timeline').timelify({
//         animLeft: "fadeInRight",
//         // animLeft: "",
// 		animRight: "fadeInLeft",
// 		animSpeed: 600,
// 		offset: 0
// 	});
// }