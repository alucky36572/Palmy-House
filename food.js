let currentButton = 'btn1'; // 初始状态下，禁用 'btn1'
let currentButton2 = 'btn3'; // 初始状态下，禁用 'btn3'

function get_num(num) {
    document.getElementById('gallery').src = 'img/food/Group ' + num + '.png';

    if (currentButton === 'btn2') {
        document.getElementById('btn2').disabled = true;
        document.getElementById('btn1').disabled = false;
        currentButton = 'btn1';
    } else {
        document.getElementById('btn2').disabled = false;
        document.getElementById('btn1').disabled = true;
        currentButton = 'btn2';
    }
}

function get_img(img) {
    document.getElementById('gallery2').src = 'img/food/food' + img + '.png';

    if (currentButton2 === 'btn4') {
        document.getElementById('btn4').disabled = true;
        document.getElementById('btn3').disabled = false;
        currentButton2 = 'btn3';
    } else {
        document.getElementById('btn4').disabled = false;
        document.getElementById('btn3').disabled = true;
        currentButton2 = 'btn4';
    }
}

// 页面加载时调用一次，传递参数 1
window.onload = function () {
    get_num(1);
    get_img(3);
};
