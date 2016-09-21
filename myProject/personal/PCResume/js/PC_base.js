/************************************************** <<<<<<<<<<<<<<< js begin >>>>>>>>>>>>>> ************************************************/
/***********************<<<<<<<  页面调整提示 js begin >>>>>>>>*********************/
	function browserRedirect() {  
	var sUserAgent = navigator.userAgent.toLowerCase();  
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
	var bIsAndroid = sUserAgent.match(/android/i) == "android";  
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
	if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {  
		alert('温馨提示：\n\n您正在使用手机浏览器浏览，使用PC浏览器浏览此页面效果会更好哦！');
		document.writeln("<div class='writeln_style'>您的浏览设备为：Phone，此状态下浏览会不正常哦，请更换手机浏览器浏览，或者跳转到 <a href='../MobileResume/index.html'>MobileResume</a> 给您带来不便之处，敬请谅解。你们的支持将是我前进的最大动力O(∩_∩)O~</div>");
 
		} else {  
			document.writeln("");  
        }  
	}  
  
	browserRedirect();
/*********************<<<<<<< 页面调整提示 js end >>>>********************/ 
window.onload = function(){


/********************************************<<<<<<<<<<<<<<  xxx begin >>>>>>>>>>>>>>>>>>>**************************************/

/*********************************************<<<<<<<<<<<<<< xxx js end >>>>>>>>>>>>>>>>>>>***************************************/    
};
/*************************************************** <<<<<<<<<<<<<<< js end >>>>>>>>>>>>>> *************************************************/


/************************************************** <<<<<<<<<<<<<<< jquery begin >>>>>>>>>>>>>> ************************************************/
/****************** <<<<<<<<<<<<<<< 先加载 jQuery 再加载 DOM >>>>>>>>>>>>>> *******************/
/*************************** 若出现跳转错误，出现writeln，响应Mobile端响应主页面移动事件 ******************************/
$(function(){
	var wr = $('.writeln_style').css('display');
	if(wr=='block'){
		$('.main-wrap').css('margin-top','55px');	
	}else{}
});
/*************************** 若出现跳转错误，出现writeln，响应Mobile端响应主页面移动事件 ******************************/

/*********** main_wrap_screen_height jquery begin(判断屏幕高度) ***********/
$(function(){
	var windowHeight = $(window).height();
	$('.main-wrap').attr('height', windowHeight);
});
/************ main_wrap_screen_height jquery end(判断屏幕高度) ************/

/****************** <<<<<<<<<<<<<<< 先加载 jQuery 再加载 DOM >>>>>>>>>>>>>> *******************/

/****************** <<<<<<<<<<<<<<< 先加载 DOM 再加载 jQuery >>>>>>>>>>>>>> *******************/
$(window).load(function(){

});
/****************** <<<<<<<<<<<<<<< 先加载 DOM 再加载 jQuery >>>>>>>>>>>>>> *******************/
/*************************************************** <<<<<<<<<<<<<<< jquery end >>>>>>>>>>>>>> 
*************************************************/  