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

    // 移动设备上滚动事件处理逻辑
    $(window).on('scroll touchmove', function () {
        // 根据需要执行滚动事件的逻辑
    });
});
