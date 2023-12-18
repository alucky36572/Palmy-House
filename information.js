function submitForm() {
    // 表單中的必填字段
    var name = document.getElementById("name").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var agree = document.getElementById("agree").checked;
    var atmpay = document.getElementById("atmpay").checked;
    var cardpay = document.getElementById("cardpay").checked;

    // 檢查是否有必填字段为空
    if (name.trim() === "" || tel.trim() === "" || email.trim() === "" ) {
        alert("請完整填寫訂購人資訊");
        return;
        
    } else if ((!atmpay) && (!cardpay) || (!agree)) {
        alert("請選擇付款方式及勾選同意");
        return;
        
    }else{
    alert("表單提交成功！");
    }

}