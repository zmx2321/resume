<!DOCTYPE html>
<html>
<head>
<title>add.php</title>
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
	<div class="add_cont_wrap">
		<form action="add.php" method="post">
			<div class="add_title">
				<input type="text" name="title">
				<br />
			</div>
			<div class="add_contents">
				<textarea rows="5" cols="50" name="con"></textarea>
				<br />
			</div>
			<div class="add_button">
				<input type="submit" name="sub" value="发表">
				<span>
					<?php
						include("conn.php");

						if(!empty($_POST['sub'])){
							$title = $_POST['title'];
							$con = $_POST['con'];
							$sql = "insert into `bug`(`id` , `title` , `dates` , `contents`) values (null , '$title' , now() , '$con')";
							mysql_query($sql);
							echo "<script>alert('插入成功');location.href='index.php'</script> ";
						}
					?>
				</span>
			</div>
		</form>
	</div>
</body>
</html>