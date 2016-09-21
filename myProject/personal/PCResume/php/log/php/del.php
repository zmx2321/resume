<?php
	include("conn.php");

	if(!empty($_GET['del'])){
		$d = $_GET['del'];
		$sql = "delete from `bug` where `id`='$d'";
		mysql_query($sql);
		echo "<script>alert('删除成功');location.href='index.php'</script>";
	}
?>