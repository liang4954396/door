  window.onload = function () {
        $("#btnLogin").onclick = function () {
            //创建对象
            let xhr = new XMLHttpRequest();

            xhr.open("post", "loginCheck03.php", true);

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    if (xhr.responseText == "1") {
                        addCookie("username", $("#txtUsername").value, 7);
                        location.href = "index.html";
                    } else {
                        $("#errorMessage").style.display = "block";
                        $("#errorMessage").innerHTML = "登录失败";
                    }
                }
            }
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            let str = `username=${$("#txtUsername").value}&userpass=${$("#userpass").value}`
            xhr.send(str)
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
