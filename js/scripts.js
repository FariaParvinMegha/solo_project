// preloader///////////////
$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});


// team///////////
$(function () {
    $(".owl-carousel").owlCarousel({
        items: 2,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false
    });
});


// progress bars/////////
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});


// responsive tabs//////////////
$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});