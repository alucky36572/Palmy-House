

let lastScroll = 0;

addEventListener("scroll", function () {
    let nav = document.getElementById("navBoard");
    const currentScroll = window.scrollY;
    const scrollDirection = currentScroll > lastScroll ? nav.style.display = "none" : nav.style.display = "flex";
    //   console.log(scrollDirection);
    lastScroll = currentScroll;
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

// $(function(){
//     $('#navBoard').hover(function(){
//         $(this).stop(true).animate({
//             top:'0px',
//         },1500,'easeOutCubic')
//     },function(){
//         $(this).animate({
//             top:'-90px',
//         },2000,'easeOutBack')
//     })
// })