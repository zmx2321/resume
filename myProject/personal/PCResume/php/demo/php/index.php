<!DOCTYPE html>
<html>
<head>
<title>index.php</title>
<link rel="stylesheet" href="../css/style.css">
</head>
<body>
	<a class="in_tj" href="add.php" target="_blank" title="添加内容">+</a>
	<hr />
	<form action="" method="get" class="in_form">
		<input class="in_input_txt" type="text" name="keys" placeholder="请输入关键字">
		<input class="in_input_sub" type="submit" name="subs" value="搜索">
	</form>
	<div class="in_cont_wrapper">
		<div class="in_cont_wrap">
		<?php
			include("conn.php");

			if(!empty($_GET['keys'])){
				$w = " `title` like '%".$_GET['keys']."%' ";
			}else{
				$w=1;
			}

			$sql = "select * from `bug` where $w order by id desc limit 10";
			$query = mysql_query($sql);

			while ($rs = mysql_fetch_array($query)) {
		?>

		<div class="in_title_wrap">
			<ul class="in_title_left">
				<li><span><?php echo $rs['id'] ?>、</span></li>
				<li>
					<a href="view.php?id=<?php echo $rs['id'] ?>" target="_blank">
						<!-- <?php  echo $rs['title'] ?> -->
						<?php  echo iconv_substr($rs['title'], 0,15,"utf-8") ?>
						<p>
							<?php  echo iconv_substr($rs['contents'], 0,25,"utf-8") ?>...
						</p>
					</a>
				</li>
			</ul>
			<div class="in_title_right">
				<span><?php  echo $rs['dates'] ?>（<?php  echo $rs['hits'] ?>）</span>
				<a href="edit.php?id=<?php echo $rs['id'] ?>" target="_blank">编辑</a>
				<a href="del.php?del=<?php echo $rs['id'] ?>" target="_blank">删除</a>
			</div>
		</div>

		<?php
		}
		?> 
		</div>
	</div>
</body>
</html>