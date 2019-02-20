   window.onload = function () {
        $("#txtUsername").onblur = function () {
            //1 创建对象
            let xhr = new XMLHttpRequest();

            //设置请求参数

            xhr.open("get", "check02.php?username=" + this.value, true);

            //回调函数
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (xhr.responseText == "0") {
                        $("#userSpan").innerHTML = "注册失败";
                    } else {
                        $("#userSpan").innerHTML = "注册成功";
                    }
                }
            }
            xhr.send();
        }

        $("#btnReg").onclick = function () {
            let xhr = new XMLHttpRequest();
            //设置请求参数
            xhr.open("post", "regSave.php", true);

            //回调函数
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(xhr.responseText);
                    if (xhr.responseText == "1") {
                        location.href = "denglu.html";
                    } else {
                        $("#errorMessage").style.display = "block";
                        $("#errorMessage").innerHTML = "登陆失败";
                    }
                }
            }
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            
            let str =
                `username=${$("#txtUsername").value}& userpass=${$("#userpass").value}`;
            xhr.send(str);
        }
    }

    function $(str) {
        if (str.charAt(0) == "#") {
            return document.getElementById(str.substring(1));
        } else if (str.charAt(0) == ".") {
            return document.getElementsByClassName(str.substring(1));
        } else {
            return document.getElementsByTagName(str);
        }
    }