$(function(){
//section1
	/*$('.section1').find('p').delay(500).animate({
			left: '0'
	}, 1500, 'easeOutExpo');*/
//全屏滑动插件
	$('#dowebok').fullpage({
		/*sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#7BAABE','#1bbc9b'],*/
		anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
		navigationTooltips:['首页','关于我','专业技能','我的经历','我的作品','联系我'],
		navigationColor:'#f00',
		css3: true,
		menu: '#menu',
		'navigation': true,
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.section1').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 2){
				$('.section2').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 3){
				$('.section3').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('p').fadeIn(2000);
			}
			if(index == 5){
				$('.section5').find('p').delay(500).animate({
					bottom: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == '6'){
				$('.section6').find('p').delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
			}
		},
		onLeave: function(index, direction){
			if(index == 1){
				$('.section1').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '2'){
				$('.section2').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '3'){
				$('.section3').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '4'){
				$('.section4').find('p').fadeOut(2000);
			}
			if(index == '5'){
				$('.section5').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500, 'easeOutExpo');
			}
			if(index == '6'){
				$('.section6').find('p').delay(500).animate({
					left: '-120%'
				}, 1500, 'easeOutExpo');
			}
		}
	});

//判断设备
	$(document).ready(function(){
		if (navigator.userAgent.match(/IEMobile|BlackBerry|Android|iPod|iPhone|iPad/i)) {
		    window.location.href="mobile";      
		}
	});
	
//改变文字
$(".header_left li:last").hover(
	function(){
		$(this).find("dd:first").html("Resume");
		$(this).find("dd:last").html("前端工程师");
	},
	function(){
		$(this).find("dd:first").html("F2E");
		$(this).find("dd:last").html("个人简历");
	}
);

$(".header").hover(
	function(){
		$(".header_left li:first-child").css({
			boxShadow:"0 0 15px #1FAEFF"
		});
	},
	function(){
		$(".header_left li:first-child").css({
			boxShadow:"initial"
		});
	}
);

//console
	console.log(
				"%c%s",
            	"color: red; font-size: 13px;",
            	"学习是一个充实愉悦的过程\n前端更贴近用户，这种体验非常美妙\n热爱FE.D，也热爱一切美好的事物\n行路有良友，便是捷径\n带上我吧，一起看到更大的世界"
            	);
	console.log(" %c 我的Github(https://github.com/webcodder)","color: red");   
	/*http://blog.csdn.net/u013682842/*/
	console.log("%d年%d月%d日",2016,10,16);
	/*console.time("控制台计时器");
	for(var i=0;i<1000;i++){
		for(var j=0;j<1000;j++){}
	}
	console.timeEnd("控制台计时器");*/
});
