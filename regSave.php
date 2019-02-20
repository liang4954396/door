<?php
    header("Content-type:text/html;charset=utf-8");
    @$username=$_POST["username"];
    @$userpass=$_POST["userpass"];
    @$usersex=$_POST["usersex"];
    @$userage=$_POST["userage"];
    @$userphone=$_POST["userphone"];

    //创建搭桥  把数据保存到数据库里

    $conn=mysql_connect("localhost","root","root");
    if(!$conn){
        echo "服务器端出错，数据没有连上";
    }else{
        //选择数据库
        mysql_select_db("mydb1810",$conn);
        //传输数据  定义字符串   写上sql语句
        $sqlstr="insert into userinfo(username,userage,usersex,userphone,userpass)
        values('$username','$userage','$usersex','$userphone','$userpass')";
        //执行sql语句  
        $result=mysql_query( $sqlstr,$conn);
        //关闭数据库

        mysql_close($conn);
        if($result==1){
            echo "1";
        }else{
            echo "0";
        }
    }

?>