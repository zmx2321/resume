<?php
	header('Content-type:text/html;charset="utf-8"');
	@mysql_connect("localhost:3306" , "root" , "admin123")or die("数据库连接失败");
	@mysql_select_db("userflag")or die("db连接失败");
	mysql_set_charset("utf8");
?>