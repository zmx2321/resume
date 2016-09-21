<?PHP
header('Content-type:text/html;charset=utf-8');
    include("conn.php");
?>
<!DOCTYPE html>
<html>
<head>
<title>login</title>
<link rel="stylesheet" type="text/css" href="login.css">
</head>
<body>
<div class="login_in">
    <form name="form" method="post" action="" >
    <ul>
        <li><span>用户名：</span><input type="text" class="input" name="username" id="username" placeholder="请输入用户名" /></li>
        <li> <span>密&nbsp;&nbsp;&nbsp;码：</span><input type="password" class="input" name="password" id="password" placeholder="请输入密码" /></li>
        <li class="denglu_btn"><input type="submit" name="sub" id="sub" value="登录" /></li>
    </ul>
</form>
</form>
</body>
</html>
<?php

if(!empty($_POST['sub'])){
    $username = $_POST['username']; 
    $password = $_POST['password'];
    $sql = "select * from `user` where username='$username' and password='$password'";
    $query = mysql_query($sql);
    @$rs = mysql_fetch_array($query);

/*    var_dump($_POST['password']);
    var_dump($rs['password']);*/

   if($rs['password']==$_POST['password']&&$rs['password']!=null){
        echo "<script>alert('登录成功');location.href='log/php/index.php'</script>";
    }else{
        echo "<script>alert('密码错误，请重新输入');</script>";
    }
}

?>