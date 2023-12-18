$(function () {
    let showHeight = 150;

    $('.attractions, .row').css({
        display: 'block',
        opacity: 0,
    });

    $(window).scroll(function () {
        $('.attractions, .row').each(function () {
            let setThis = $(this);
            let areaTop = setThis.offset().top; // 物件和螢幕的距離
            // console.log(areaTop);

            if ($(window).scrollTop() >= areaTop - $(window).height() + showHeight) {
                setThis.stop().animate({
                    opacity: 1,
                }, 400);
            } else {
                setThis.stop().animate({
                    opacity: 0,
                }, 400);
            }
        });
    });

    // 手機上滾動事件處理
    $(window).on('scroll touchmove', function () {
        
    });
});
