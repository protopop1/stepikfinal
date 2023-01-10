$(function () {
    const scrollElem = $('.scroll-top');
    if ($(window).scrollTop() >= 100) {
        scrollElem.css({
            display: 'block'
        })
    }
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            scrollElem.css({
                display: 'block'
            })
        } else {
            scrollElem.css({
                display: 'none'
            })
        }
    })
    $(scrollElem).click(function (e) {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1)
    });
})
