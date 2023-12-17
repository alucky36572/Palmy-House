$(function(){
    $('#navBoard').hover(function(){
        $(this).stop(true).animate({
            top:'0px',
        },1500,'easeOutCubic')
    },function(){
        $(this).animate({
            top:'-90px',
        },2000,'easeOutBack')
    })
})

document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');

    hamburgerMenu.addEventListener('click', function () {
        toggleAnimation();
    });

    function toggleAnimation() {
        hamburgerMenu.classList.toggle('cross');
    }
});