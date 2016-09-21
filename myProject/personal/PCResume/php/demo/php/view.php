<!DOCTYPE html>
<html>
<head>
<title>view.php</title>
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
	<?php
		include("conn.php");

		if(!empty($_GET['id'])){
			$sql = "select * from bug where `id` = '".$_GET['id']."'";
			$query = mysql_query($sql);
			$rs = mysql_fetch_array($query);

			$sqlup="update bug set hits = hits+1 where `id` = '".$_GET['id']."'";
			mysql_query($sqlup);
		}
	?>
	<div class="view_top">
		<ul>
			<li class="view_title"><?php echo $rs['title'] ?></li>
			<li class="view_date"><?php echo $rs['dates'] ?></li>
			<li class="view_hit">阅读:（<?php echo $rs['hits'] ?>）</li>
		</ul>
	</div>
	<hr />
	<div class="view_fot">
		<p><?php echo $rs['contents'] ?></p>
	</div>
</body>
</html>>