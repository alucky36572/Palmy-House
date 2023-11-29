function calculateDateDifference() {
    // 获取开始日期和结束日期的输入值
    var startDate = new Date(document.getElementById("startDate").value);
    var endDate = new Date(document.getElementById("endDate").value);

    // 计算日期差异（以毫秒为单位）
    var timeDifference = endDate - startDate;

    // 转换为天数
    var daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    var nightsDifference = Math.max(daysDifference, 1);
    // 显示结果
    document.getElementById("result").innerHTML = (daysDifference + 1) + " 天 " + nightsDifference + " 晚";
}

function updateTotal() {
    // 获取每个下拉选择框的值
    var adults = parseInt(document.getElementById("adults").value);
    var children = parseInt(document.getElementById("children").value);
    var infants = parseInt(document.getElementById("infants").value);

    // 计算总人数
    var total = adults + children + infants;

    // 如果总人数超过7，则重置下拉框的值
    if (total > 7) {
        alert("總人數最多7位哦！");
        resetValues();
    } else {
        // 更新显示结果
        document.getElementById("total").innerHTML = total;
    }
}

function resetValues() {
    // 将下拉框的值重置为0
    document.getElementById("adults").value = "0";
    document.getElementById("children").value = "0";
    document.getElementById("infants").value = "0";

    // 更新显示结果
    document.getElementById("total").innerHTML = "0";
}

// var count = 0;  // 初始计数值

// function updateCount() {
//     // 更新显示的计数值
//     document.getElementById("count").innerHTML = count;
// }

// function increase() {
//     // 加一
//     count++;
//     count = Math.min(1, count + 1);
//     // 更新显示
//     updateCount();
// }

// function decrease() {
//     // 减一，但保证不小于零
//     count = Math.max(0, count - 1);
//     // 更新显示
//     updateCount();
// }

// var count = 0;  // 初始计数值

// function updateCount() {
//     // 更新显示的计数值
//     document.getElementById("count2").innerHTML = count;
// }

// function increase() {
//     // 加一
//     count++;
//     count = Math.min(1, count + 1);
//     // 更新显示
//     updateCount();
// }

// function decrease() {
//     // 减一，但保证不小于零
//     count = Math.max(0, count - 1);
//     // 更新显示
//     updateCount();
// }

// var count = 0;  // 初始计数值

// function updateCount() {
//     // 更新显示的计数值
//     document.getElementById("count3").innerHTML = count;
// }

// function increase() {
//     // 加一
//     count++;
//     count = Math.min(1, count + 1);
//     // 更新显示
//     updateCount();
// }

// function decrease() {
//     // 减一，但保证不小于零
//     count = Math.max(0, count - 1);
//     // 更新显示
//     updateCount();
// }

var counters = {
    count1: 0,
    count2: 0,
    count3: 0
};

function updateCount(id) {
    // 更新显示的计数值
    document.getElementById(id).innerHTML = counters[id];
}

function increase(id) {
    // 加一
    if (counters[id] < 1) {
        counters[id]++;
        // 更新显示
        updateCount(id);
    }
}

function decrease(id) {
    // 减一，但保证不小于零
    counters[id] = Math.max(0, counters[id] - 1);
    // 更新显示
    updateCount(id);
}
