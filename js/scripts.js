// preloader///////////////
$(window).on('load', function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});


// team//////////////
$(function () {
    $("#team-members").owlCarousel({
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


// progress bars////////////
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


// portfolio ///////////////////
$(window).on('load', function () {

    // initialize-isotope////////////
    $(".isotope-container").isotope({
    });

    // filter items on button click////////////
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value///////
        var filterValue = $(this).attr('data-filter');
        $(".isotope-container").isotope({
            filter: filterValue
        });

        // active button//////
        $("#isotope-filters").find(".active").removeClass("active");
        $(this).addClass("active");
    });
});


// magnifier////////////
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});


// testimonials////////////
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 3000,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false
    });
});