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
    document.getElementById("result").innerHTML = "(" + (daysDifference+1) + " 天 " + nightsDifference+" 晚)";
}