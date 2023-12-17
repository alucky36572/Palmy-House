function calculateDateDifference() {
    // 获取开始日期和结束日期的输入值
    var startDateInput = document.getElementById("startDate");
    var endDateInput = document.getElementById("endDate");



    // 获取今天的日期
    var today = new Date();
    today.setHours(0, 0, 0, 0); // 将时间部分设为0，以便只比较日期

    // 获取60天后的日期
    var maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 60);

    // 将输入值转换为日期对象
    var startDate = new Date(startDateInput.value);
    var endDate = new Date(endDateInput.value);
    // var startClear = startDateInput.value = "";
    // var endClear = endDateInput.value = "";

    // 检查日期有效性
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        alert("請選擇入住及退房日期");

        return;
    }

    // 检查入住日期不能在今天之前
    if (startDate < today) {
        alert("不能選擇今天以前的日期");

        return;
    }

    // 检查入住日期和退房日期不能是同一天
    if (startDate.getTime() === endDate.getTime()) {
        alert("入住日期和退房日期不能是同一天");

        return;
    }

    // 检查退房日期不能在60天后
    if (startDate > maxDate) {
        alert("60天後的訂房還未開放");

        return;
    }

    // 检查结束日期不能在开始日期之前
    if (endDate < startDate) {
        alert("退房日期不能在入住日期之前");

        return;
    }

    // 计算日期差异（以毫秒为单位）
    var timeDifference = endDate - startDate;

    // 转换为天数
    var daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    var nightsDifference = Math.max(daysDifference, 1);

    document.getElementById("result").innerHTML = (daysDifference + 1) + " 天 " + nightsDifference + " 晚";









    // 获取包含价格的元素的数组
    var priceElements = [
        document.getElementById("familyRegular"),
        document.getElementById("doubleRegular"),
        document.getElementById("singleRegular")
    ];

    // 遍历元素数组，处理每个房间的信息
    priceElements.forEach(function (priceElement, index) {
        if (priceElement) {
            // 获取元素的文本内容
            var priceText = priceElement.innerText;
            // 提取数字部分
            var priceValue = parseFloat(priceText.replace(",", ""));
            var totalPrice = priceValue * nightsDifference;

            // 更新显示晚数的元素
            document.getElementById("nights" + (index + 1)).innerHTML = "X" + nightsDifference + "晚";

            // 更新显示总价的元素
            document.getElementById("regular" + (index + 1)).innerHTML = "TWD" + totalPrice.toLocaleString();

        }

    });

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
        console.log("Total updated:", total);
    }

}

document.addEventListener("DOMContentLoaded", function () {
    var counters = {
        count1: 0,
        count2: 0,
        count3: 0
    };

    // // 繼續執行頁面初始化
    // var elements;
    // 定義通用的函數
    function configureCounterButtons(buttonPlusId, buttonMinusId, elementsClassName, counterId) {
        let plusButton = document.getElementById(buttonPlusId);
        let minusButton = document.getElementById(buttonMinusId);
        let elements = document.getElementsByClassName(elementsClassName);
        console.log("elements:", elements);

        if (plusButton && minusButton) {
            plusButton.onclick = function () {
                // 檢查日期是否已選擇
                if (!isDateSelected()) {
                    alert("請先選擇入住和退房日期哦！");
                    return;
                }
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.display = 'block';
                    increase(counterId);

                }
                // if (counters[counterId] < 1) {
                //     elements[0].style.display = 'block';  // 假設只有一個元素
                //     increase(counterId);
                // }

                // 禁用按鈕
                plusButton.disabled = true;
            };

            minusButton.onclick = function () {
                // 檢查日期是否已選擇
                if (!isDateSelected()) {
                    alert("請先選擇入住和退房日期哦！");
                    return;
                }
                for (let i = 0; i < elements.length; i++) {
                    elements[i].style.display = 'none';
                    decrease(counterId);

                }
                plusButton.disabled = false;
            };




        }
        let nextButton = document.getElementById("nextstep");
        nextButton.onclick = function nextpage(event) {
            // 检查房型是否选择
            if (counters.count1 === 0 && counters.count2 === 0 && counters.count3 === 0) {
                alert("至少選擇一個房型哦");
                event.preventDefault();
                return;
            }

            updateTotal();
    
    // 获取总人数
    var totalSpan = document.getElementById("total");
    var totalNumber = parseInt(totalSpan.textContent);

    // 检查是否至少选择了一个人
    if (totalNumber === 0) {
        alert("請選擇入住人數");
        event.preventDefault();
        return;
    }



            
        };


    }
    function isDateSelected() {
        var startDateInput = document.getElementById("startDate");
        var endDateInput = document.getElementById("endDate");
        return startDateInput.value && endDateInput.value;
    }

    // 頁面初始化的其餘代碼...

    function updateCount(id) {
        console.log(`Updating count ${id} to ${counters[id]}`);
        document.getElementById(id).innerHTML = counters[id];
    }

    let a = 0;
    let b = 0;
    let c = 0;

    function increase(id) {
        if (counters[id] < 1) {
            counters[id]++;
            updateCount(id);
        }

        // 根據 id 更新對應的 a、b 或 c
        if (id === 'count1') {
            a = parseFloat(document.getElementById('regular1').textContent.replace("TWD", "").replace(",", ""));
        } else if (id === 'count2') {
            b = parseFloat(document.getElementById('regular2').textContent.replace("TWD", "").replace(",", ""));
        } else if (id === 'count3') {
            c = parseFloat(document.getElementById('regular3').textContent.replace("TWD", "").replace(",", ""));
        }

        // 更新 regularTotal
        updateTotalValue();

        // 更新 deposit 和 finalpay
        document.getElementById("deposit").innerHTML = "TWD" + ((a + b + c) * 0.3).toLocaleString();
        document.getElementById("finalpay").innerHTML = "TWD" + ((a + b + c) * 0.7).toLocaleString();
    }

    function decrease(id) {
        if (counters[id] > 0) {
            counters[id] = Math.max(0, counters[id] - 1);
            updateCount(id);

            if (id === 'count1') {
                a -= parseFloat(document.getElementById('regular1').textContent.replace("TWD", "").replace(",", ""));
            } else if (id === 'count2') {
                b -= parseFloat(document.getElementById('regular2').textContent.replace("TWD", "").replace(",", ""));
            } else if (id === 'count3') {
                c -= parseFloat(document.getElementById('regular3').textContent.replace("TWD", "").replace(",", ""));
            }

            // 更新 regularTotal
            updateTotalValue();

            // 更新 deposit 和 finalpay
            document.getElementById("deposit").innerHTML = "TWD" + ((a + b + c) * 0.3).toLocaleString();
            document.getElementById("finalpay").innerHTML = "TWD" + ((a + b + c) * 0.7).toLocaleString();
        }
    }

    function updateTotalValue() {
        let total = a + b + c;
        document.getElementById("regularTotal").innerHTML = "TWD" + total.toLocaleString();
    }




    // 使用通用函數配置第一個計數器
    configureCounterButtons('familyPlus', 'familyMinus', 'familyBottom', 'count1');

    // 使用通用函數配置第二個計數器
    configureCounterButtons('doublePlus', 'doubleMinus', 'doubleBottom', 'count2');
    configureCounterButtons('singlePlus', 'singleMinus', 'singleBottom', 'count3');
    console.log("Next button click handler registered.");


});






function resetValues() {
    // 将下拉框的值重置为0
    document.getElementById("adults").value = "0";
    document.getElementById("children").value = "0";
    document.getElementById("infants").value = "0";

    // 更新显示结果
    document.getElementById("total").innerHTML = "0";
}





// function calculateDateDifference() {
//     // 获取开始日期和结束日期的输入值
//     var startDate = new Date(document.getElementById("startDate").value);
//     var endDate = new Date(document.getElementById("endDate").value);

//     // 计算日期差异（以毫秒为单位）
//     var timeDifference = endDate - startDate;

//     // 转换为天数
//     var daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
//     var nightsDifference = Math.max(daysDifference, 1);
//     document.getElementById("result").innerHTML = (daysDifference + 1) + " 天 " + nightsDifference + " 晚";

//     // // 获取包含价格的元素
//     var familyRegularElement = document.getElementById("familyRegular");
//     var doubleRegularElement = document.getElementById("doubleRegular");
//     var singleRegularElement = document.getElementById("singleRegular");

//     // 获取元素的文本内容
//     var priceText1 = familyRegularElement.innerText;
//     var priceText2 = doubleRegularElement.innerText;
//     var priceText3 = singleRegularElement.innerText;

//     // 提取数字部分
//     var priceValue1 = parseFloat(priceText1.replace(",", ""));
//     var priceValue2 = parseFloat(priceText2.replace(",", ""));
//     var priceValue3 = parseFloat(priceText3.replace(",", ""));
//     var totalPrice1 = priceValue1 * nightsDifference;
//     var totalPrice2 = priceValue2 * nightsDifference;
//     var totalPrice3 = priceValue3 * nightsDifference;
//     // 显示结果

//     document.getElementById("nights1").innerHTML = "X" + nightsDifference + "晚";
//     document.getElementById("nights2").innerHTML = "X" + nightsDifference + "晚";
//     document.getElementById("nights3").innerHTML = "X" + nightsDifference + "晚";
//     document.getElementById("regular1").innerHTML = "TWD" + totalPrice1.toLocaleString();
//     document.getElementById("regular2").innerHTML = "TWD" + totalPrice2.toLocaleString();
//     document.getElementById("regular3").innerHTML = "TWD" + totalPrice3.toLocaleString();
// }

