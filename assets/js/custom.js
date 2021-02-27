$(".slick-slider").slick({
    // normal options...
    infinite: false,
    slidesToShow: 3,
    // the magic
    responsive: [{
        breakpoint: 1024,
        settings: {
        slidesToShow: 3,
        infinite: true
        }

    }, {

        breakpoint: 600,
        settings: {
        slidesToShow: 2,
        dots: true
        }

    }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

    }]
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".headerBox").addClass("headerBox--fixed");
    }
    else {
        $(".headerBox").removeClass("headerBox--fixed");
    }
}); //missing );

$('.mobile-toggle').on('click', function(){
    $('.headerBox__menu-wrapper').toggleClass('active');
    $(this).toggleClass('active');
});

$('.cross-menu-btn').on('click', function(){
    $('.headerBox__menu-wrapper').removeClass('active');
    $('.mobile-toggle').removeClass('active');
});