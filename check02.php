<?php
header("Content-type:text/html;charset=utf-8");

//接收数据

$username=$_GET["username"];
//处理把数据保存到数据库里  创建搭桥

$conn=mysql_connect("localhost","root","root");

if(!$conn){
    echo "服务器端出错，数据没有连上";
}else{
    mysql_select_db("mydb1810",$conn);
    //传输数据  定义字符串 写上sql语句
    $sqlstr="select*from userinfo where username='$username'";
    $result=mysql_query($sqlstr,$conn);
    mysql_close($conn);
    if(mysal_num_rows=="1"){
        echo "1";
    }else{
        echo "0";
    }
}

?>