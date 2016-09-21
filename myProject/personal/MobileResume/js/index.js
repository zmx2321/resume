/************************************************** <<<<<<<<<<<<<<< js begin >>>>>>>>>>>>>> ************************************************/
window.onload = function(){
/*******************<<<<<<<< xxx js begin  >>>>>>>>>>*******************/

/*****************************<<<<< xxx js end  >>>>>>>>>>>******************/  
};
/*************************************************** <<<<<<<<<<<<<<< js end >>>>>>>>>>>>>> *************************************************/


/************************************************** <<<<<<<<<<<<<<< jquery begin >>>>>>>>>>>>>> ************************************************/

/****************** <<<<<<<<<<<<<<< 先加载 DOM 再加载 jQuery begin >>>>>>>>>>>>>> *******************/
/**************** 停止/播放 图标 转换 播放 ***************/
/*$(function(){
	$('.music img').toggle(
		function(){
			$(this).attr('src','images/music_off.png');
		},
		function(){
			$(this).attr('src','images/music_on.png');
		}
	);
});*/
$(document).ready(function(){
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				mp3:"../public/music/relax.mp3"
			}).jPlayer("play").jPlayer("repeat");
		},
		swfPath: "js",
		supplied: "mp3",
		wmode: "window",
		smoothPlayBar: true,
		keyEnabled: true
	});
});
/**************** 停止/播放 图标 转换 播放 ***************/

/**************** 打字 ***************/
$(function(){
	$('textarea')
  .typetype('Hello, world!\nHello, world!\nHello, world!\nHello, world!\nHello, world!\n')
  .typetype('        傻x傻x傻xxxx，O(∩_∩)O~')
  .typetype('\n\nend.')
  .delay(10000)
  .typetype('\n\nGoodbye.')
  .delay(2000)
  .backspace(25)
});

/*$('.wz p').typetype(
  'Text to append',
  {
    e: 0.04, // error rate. (use e=0 for perfect typing)
    t: 100, // interval between keypresses
    keypress: function (){
      // called after every keypress (this may be an erroneous keypress!)
    },
    callback: function (){
      // the `this` keyword is bound to the particular element.
    }
  }
)*/

/*$(function(){
$('.wz p')
  .typetype('Hello, world!')
  .delay(1000)
  .typetype('\n\nGoodbye.')
  .backspace(25)
  .fadeOut() // regular jQuery effects queue up nicely	
});*/

/*$('.wz p').load(function(){
	$('.wz').css('border','0');
})*/
/**************** 打字 ***************/

/****************** 二维码点击放大 ***************/
/*$(function(){
	$('.ewm_wrap img').toggle(
		function(){
			$(this).css('width','300px')
				   .css('height','300px');
			$('.ewm_wrap').css('top','20%')
						  .css('left','10%')
						  .css('width','300px')
						  .css('height','300px');
			$('.ewm_wrap span').text('超级无敌傻x');
		},
		function(){
			$(this).css('width','150px')
				   .css('height','150px');
			$('.ewm_wrap').css('top','30%')
						  .css('left','30%')
						  .css('width','150px')
						  .css('height','150px');
			$('.ewm_wrap span').text('傻x傻x傻x');
		}
	);	
});*/

/*$(function(){
	$('.ewm_wrap img').toggle(
		function(){
			$(this).attr('src','../public/images/ewm.png');
			$('.ewm_wrap span').text('点击进入我的个人简历');
			$('.inside').css('display','none');
		},
		function(){
			$(this).attr('src','images/fire.gif');
			$('.ewm_wrap span').text('点击查看我的二维码');
			$('.inside').css('display','block');
			
		}
	);
});*/

$(function(){
	$('.ewm_wrap img').click(function(){
		$(this).hide();
		$('.inside').css('display','block');	
		$('.ewm_test span').show();
	});
	$('.ewm_test span').click(function(){
		$('.ewm_wrap img').show();	
		$('.inside').css('display','none');
		$(this).hide();
	});
});


/****************** 二维码点击放大 ***************/

/****************** 跳转 ***************/
$(function(){
	$('.tzf').click(function(){
		//alert(1);
		$('.main_href').hide();	
		$('.main_2').show();
	});	
});

$(function(){
	$('.main_href_fh').click(function(){
		$('.main_href').show();	
		$('.main_2').hide();	
	});	
});
/****************** 跳转 ***************/

/****************** xxx ***************/

/****************** xxx ***************/
/****************** <<<<<<<<<<<<<<< 先加载 DOM 再加载 jQuery end >>>>>>>>>>>>>> *******************/

/****************** <<<<<<<<<<<<<<< 先加载 jQuery 再加载 DOM begin >>>>>>>>>>>>>> *******************/
$(window).load(function(){

});
/****************** <<<<<<<<<<<<<<< 先加载 jQuery 再加载 DOM end >>>>>>>>>>>>>> *******************/
/*************************************************** <<<<<<<<<<<<<<< jquery end >>>>>>>>>>>>>> 
*************************************************/  