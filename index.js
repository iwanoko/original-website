$(function () {
    $(window).scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + windowHeight / 15) {
                $(this).addClass('scrollin');
            }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.fadein2').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + windowHeight / 3) {
                $(this).addClass('scrollin');
            }
        });
    });
});

$(function () {
    $(window).scroll(function () {
        $('.fadein3').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + windowHeight / 2) {
                $(this).addClass('scrollin');
            }
        });
    });
});
