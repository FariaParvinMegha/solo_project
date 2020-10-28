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
        autoplayTimeout: 2000,
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


// statistics//////////////
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });
});


// clients/////////////
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        autoplayTimeout: 2000,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });
});


// navigation/////////////

// show&hide nav///
$(function () {
    showNhidenav();
    $(window).on("scroll", function () {
        showNhidenav();
    });
    function showNhidenav() {
        if ($(window).scrollTop() > 70) {
            $("nav").addClass("white-nav-top");
            $(".navbar-brand img").attr("src", "assets/images/logo/logo-dark.png");
            $("#back-to-top").fadeIn();
        } else {
            $("nav").removeClass("white-nav-top");
            $(".navbar-brand img").attr("src", "assets/images/logo/logo.png");
            $("#back-to-top").fadeOut();
        }
    }
});

// scrolling/////
$(function () {
    $("a.smooth-scroll").on("click", function (event) {
        event.preventDefault();
        var section_id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});


// mobile menu/////////////////////
$(function () {
    // show mobile nav //
    $("#mobile-nav-open-btn").on("click", function () {
        $("#mobile-nav").css("height", "100%");
    });
    // hide mobile nav //
    $("#mobile-nav-close-btn , #mobile-nav a").on("click", function () {
        $("#mobile-nav").css("height", "0%");
    });
});


// animation ///////////////////
$(function () {
    new WOW().init();
})

$(window).on('load', function(){
    $("#home-heading-1").addClass("animate__animated animate__fadeInDown delay-1");
    $("#home-heading-2").addClass("animate__animated animate__fadeInLeft delay-2");
    $("#home-text").addClass("animate__animated animate__zoomIn delay-3");
    $("#home-btn").addClass("animate__animated animate__zoomIn delay-4");
    $("#arrow-down i").addClass("animate__animated animate__fadeInDown animate__infinite delay-5")
})