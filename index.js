$(function () {
    let index = 0;
    let timer;
    let interval = 4000;

    function initializeSlider() {
        let divWidth = $('#sliderBoard').width();
        let imgcount = $('#content li').length;

        $('#content li').width(divWidth);
        $('#content').width(divWidth * imgcount);
        $('#content').css('left', divWidth * index * -1);

        // 清空並重新生成 #contentButton
        $('#contentButton').empty();
        for (let i = 0; i < imgcount; i++) {
            $('#contentButton').append('<li></li>');
        }
        $('#contentButton li:first').addClass('clicked');

        // 重新綁定點擊事件
        $('#contentButton li').click(function () {
            clearInterval(timer);
            index = $(this).index();

            $('#content').animate({
                left: divWidth * index * -1,
            });

            $(this).addClass('clicked');
            $('#contentButton li').not(this).removeClass('clicked');

            startTimer();
        });
        startTimer(); // 確保最初設置計時器
    }

    function startTimer() {
        clearInterval(timer); // 清除現有計時器
        timer = setInterval(moveToNext, interval);
    }

    function moveToNext() {
        switchImage();
        startTimer(); // 在每次触发定时器时重新设置
    }
    
    function switchImage() {
        let divWidth = $('#sliderBoard').width();
        let imgcount = $('#content li').length;
    
        if (index < imgcount - 1) {
            index++;
        } else {
            index = 0;
        }
    
        $('#content').animate({
            left: divWidth * index * -1,
        });
    
        $(`#contentButton li:eq(${index})`).addClass('clicked');
        $('#contentButton li').not(`:eq(${index})`).removeClass('clicked');
    }
    

    // 初始化
    initializeSlider();
    startTimer();

    // 視窗大小改變時重新計算輪播尺寸和 #contentButton
    $(window).resize(function () {
        clearInterval(timer);
        $('#sliderBoard').stop(true, true);
        initializeSlider();
        startTimer();
    });
});






$(function () {
    let showHeight = 150;

    $('.cover').css({
        display: 'flex',
        opacity: 0,
    });

    $(window).scroll(function () {
        $('.cover').each(function () {
            let setThis = $(this);
            let areaTop = setThis.offset().top; // 物件和螢幕的距離

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





