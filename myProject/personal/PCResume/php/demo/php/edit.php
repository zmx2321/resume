<!DOCTYPE html>
<html>
<head>
<title>deit.php</title>
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
	<?php
		include("conn.php");

		if(!empty($_GET['id'])){
			$sql = "select * from bug where `id` = '".$_GET['id']."'";
			$query = mysql_query($sql);
			$rs = mysql_fetch_array($query);
		}

		if(!empty($_POST['sub'])){
			$title = $_POST['title'];
			$con = $_POST['con'];
			$hid = $_POST['hid'];
			$sql = "update `bug` set `title`='$title' , contents='$con' where id='$hid'";
			mysql_query($sql);
			echo "<script>alert('更新成功');location.href='index.php'</script>";
		}
	?>

	<div class="edit_cont_wrap">
		<form action="edit.php" method="post">
			<input type="hidden" name="hid"  value="<?php echo $rs['id'] ?>">
			<div class="edit_title">
				<input type="text" name="title" value="<?php echo $rs['title'] ?>">
				<br />
			</div>
			<div class="edit_contents">
				<textarea rows="5" cols="50" name="con"><?php echo $rs['contents'] ?></textarea><br />
			</div>
			<div class="edit_button">
				<input type="submit" name="sub" value="发表">
			</div>
		</form>
	</div>
</body>
</html>