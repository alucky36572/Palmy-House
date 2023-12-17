function togglePages(pageId) {
    const pages = document.querySelectorAll('.card');

    pages.forEach(page => {
        if (page.id === pageId) {
            // 顯示選中的頁面，隱藏其他頁面
            page.classList.remove("hidden");
        } else {
            // 隱藏其他頁面
            page.classList.add("hidden");
        }
    });
}



function showAttraction(attractionId) {
    const attractions = document.querySelectorAll('.attractions, .attractions2, .attractions3');

    attractions.forEach(attraction => {
        if (attraction.id === attractionId) {
            attraction.style.display = 'flex';
        } else {
            attraction.style.display = 'none';
        }
    });
}

// $(function () {
//     let showHeight = 200

//     $('.attractions').css({
//         display: 'block',
//         opacity: 0,
//     })

//     $(window).scroll(function(){								
//         $('.attractions').each(function(){
//             let setThis = $(this)
//             let areaTop = setThis.offset().top  // 物件和螢幕的距離
//             // console.log(areaTop);

//             if($(window).scrollTop() >= (areaTop + showHeight) - $(window).height() ){
//                 setThis.stop().animate({
//                     opacity: 1,
//                 }, 800)
//             }else{
//                 setThis.stop().animate({
//                     opacity: 0,
//                 }, 800)
//             }

//         })
//     })
// })




