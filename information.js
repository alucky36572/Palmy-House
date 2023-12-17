function submitForm() {
    // 获取表单中的必填字段
    var name = document.getElementById("name").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var agree = document.getElementById("agree").checked;
    var atmpay = document.getElementById("atmpay").checked;
    var cardpay = document.getElementById("cardpay").checked;

    // 检查是否有必填字段为空
    if (name.trim() === "" || tel.trim() === "" || email.trim() === "" ) {
        alert("請完整填寫訂購人資訊");
        return;
    } else if ((!atmpay) && (!cardpay) || (!agree)) {
        alert("請選擇付款方式及勾選同意");
        return;
    }


    // 如果通过验证，可以继续提交表单或执行其他逻辑
    alert("表單提交成功！");
    // 这里可以添加实际的表单提交逻辑
}