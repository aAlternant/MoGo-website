window.addEventListener('load', () => {
    if (localStorage.getItem('scrolled')) {
        $('#header').addClass('fixed');
    }
});

$(function () {
    var header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffset = 0;

    $(window).on('scroll', () => {
        scrollOffset = $(this).scrollTop();

        if (scrollOffset >= introH) {
            header.addClass('fixed');
            localStorage.setItem('scrolled', true);
        } else {
            header.removeClass('fixed');
            localStorage.removeItem('scrolled');
        }
    });

    // Smooth scroll

    $('[data-scroll]').on('click', function (e) {
        e.preventDefault();

        let $this = $(this);
        (blockId = $this.data('scroll')), (blockOffset = $(blockId).offset().top);

        $('#nav a').removeClass('active');

        $this.addClass('active');

        $('html, body').animate({ scrollTop: blockOffset });
    });

    $('#nav-toggle'),
        $('#nav-toggle__item').on('click', function (e) {
            let obj = $('#nav-toggle');
            let nav = $('#nav');
            obj.toggleClass('active');
            nav.toggleClass('active');
        });

    $('.accordion__item').on('click', function (e) {
        e.preventDefault();

        $this = $(this);

        $this.toggleClass('active');
    });

    $('[data-slider').slick({
        infinity: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.reviews__button--prev'),
        nextArrow: $('.reviews__button--next'),
    });

    // $('.reviews__button--prev').on('click', function (e) {
    //     e.preventDefault();

    //     $('.slick-prev').click();
    // });

    // $('.reviews__button--next').on('click', function (e) {
    //     e.preventDefault();

    //     $('.slick-next').click();
    // });
});
