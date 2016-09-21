/************************************************** <<<<<<<<<<<<<<< js begin >>>>>>>>>>>>>> ************************************************/
window.onload = function(){
/********************************************<<<<<<<<<<<<<< H5全屏滑动 js begin >>>>>>>>>>>>>>>>>>>**************************************/
	var sHeight = document.querySelector('.a').clientHeight;
	//获取一屏的高度，判断该移动多少
	var sLength = document.querySelectorAll('.section').length;
	//判断有几屏页面
	var sIndex = 0;//标记当前第几页
	var sScroll = false;//滚动时就不再触发事件，防止误点
	var main = document.querySelector('.main'); //需要移动的DOM
	window.onmousewheel = function(e){
		//PC端的滚轮事件，嗯不兼容火狐
		if(!sScroll){
			if(e.wheelDelta>0){
				//上一页
				if(sIndex == 0){return; }
				sIndex--;
				scrollTo(sIndex);
			}else{
				//下一页
				if(sIndex == sLength-1){return;}
				sIndex++;
				scrollTo(sIndex);
			}
		}
	}
	
	function scrollTo(i){
		//操作动画的函数
		sScroll = true;
		main.style.top = -i*sHeight + 'px';
		setTimeout(function(){sScroll = false}, 700);
	}
	
	var hamm = new Hammer(document.querySelector('.main-wrap'));
	hamm.get('swipe').set({ direction: Hammer.DIRECTION_ALL});
	//hammer默认关闭上下swipe 设置开启上下滑屏
	hamm.on('swipedown', function(){
			if(!sScroll){
					//上一页
					if(sIndex == 0){return; }
					sIndex--;
					scrollTo(sIndex);
			}
	
	});
	hamm.on('swipeup', function(){
			if(!sScroll){
					//下一页
					if(sIndex == sLength-1){return;}
					sIndex++;
					scrollTo(sIndex);
			}        
	
	});
/*********************************************<<<<<<<<<<<<<< H5全屏滑动 js end >>>>>>>>>>>>>>>>>>>***************************************/  	
	
/***********************************<<<<<<<< xxx js begin >>>>>>>>>*****************************/
/********************************<<<<<<<<< xxx js end >>>>>>>>>>******************************/
};
/************************************************** <<<<<<<<<<<<<<< js end >>>>>>>>>>>>>> ************************************************/

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
				mp3:"../public/music/zc.mp3"
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
  .typetype('Hello, world!')
  .delay(1000)
  .typetype('\n\nGoodbye.')
  .backspace(25)
  .fadeOut() // jQuery效果
});
/**************** 打字 ***************/
/****************** <<<<<<<<<<<<<<< 先加载 DOM 再加载 jQuery begin >>>>>>>>>>>>>> *******************/

/****************** <<<<<<<<<<<<<<< 先加载 jQuery 再加载 DOM begin >>>>>>>>>>>>>> *******************/
$(window).load(function(){

});
/****************** <<<<<<<<<<<<<<< 先加载 jQuery 再加载 DOM end >>>>>>>>>>>>>> *******************/
/*************************************************** <<<<<<<<<<<<<<< jquery end >>>>>>>>>>>>>>*************************************************/  