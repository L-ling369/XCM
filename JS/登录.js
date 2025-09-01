function CY() {
    var ZH = document.getElementById('ZH').value;
    var MM = document.getElementById('MM').value;

    // 判断账号是否为空
    if (ZH.trim() == '') {
        alert('账号不能为空哦！');
        return;
    }
    // 判断密码是否为空
    if (MM.trim() == '') {
        alert('密码不能为空哦！');
        return;
    }



    // 判断账号和密码是否正确
    if (ZH == 'LSZMZNQ' && MM == 'wbxgk') {
        window.location.href = "HTML/作品介绍.html";
    }

    // 账号或密码错误
    else {
        alert('账号或密码错误');
    }
}