/************************************************** <<<<<<<<<<<<<<< js begin >>>>>>>>>>>>>> ************************************************/
/********************************************<<<<<<<<<<<<<<  bg 图片 js begin >>>>>>>>>>>>>>>>>>>**************************************/
var xm = 0;
var ym = 0;
sP = {
	cx: 0,
	cy: 0,
	N: 0,
	R: [],
	I: [],
	C: [],
	L: [],
	Id: 0,
	init: function() {
		/* ==== init script ==== */
		this.scr = document.getElementById('bg_screen');
		this.pan = document.getElementById('pan');
		this.div = this.pan.getElementsByTagName('div');
		this.scr.onselectstart = function() {
			return false;
		}
		this.scr.ondrag = function() {
			return false;
		}
		/* ==== for each pane ==== */
		for (var i = 0, o; o = this.div[i]; i++) {
			if (o.className == 'frame') {
				/* ==== create legend ==== */
				o.l = document.createElement('div');
				o.l.className = 'legend';
				o.appendChild(o.l);
				/* ==== create flap ==== */
				o.r = document.createElement('div');
				o.r.className = 'slider';
				o.appendChild(o.r);
				o.r.x = 0;
				o.r.l = o.l;
				o.r.p = 0;
				o.r.s = 2;
				o.r.m = false;
				o.img = o.r.img = o.getElementsByTagName('img')[0];
				o.r.c = Math.random() * 100;
				o.r.o = o;
				sP.R[sP.N] = o.r;
				sP.I[sP.N] = o.img.src;
				sP.L[sP.N] = o.title;
				o.title = "";
				sP.N++;
				/* ==== flap mouse over event ==== */
				o.r.onmouseover = function() {
					if (!this.m && this.img.complete) 
					{
						/* ==== switch image ==== */
						if (sP.O != this && !this.n) {
							this.x = this.o.offsetWidth;
							this.l.innerHTML = sP.L[sP.Id];
							this.img.src = sP.I[sP.Id];
							this.resize();
							this.n = true;
							if (++sP.Id >= sP.N) {
								sP.Id = 0;
								for (var i = 0, o; o = sP.R[i]; i++)
									o.n = false;
							}
						}
						/* ==== up++ ==== */
						if (sP.O) {
							sP.O.s = 2;
							sP.C.push(sP.O);
						}
						this.m = true;
						sP.O = this;
						sP.Or = this;
					}
				}
				/* ==== resize image ==== */
				o.r.resize = function() {
					var i = new Image();
					i.src = this.img.src;
					this.img.style.width = (i.width < this.offsetWidth) ? Math.round(this.offsetWidth * 1.25) + 'px' : Math.round(i.width) + 'px';
					this.img.style.height = (i.height < this.offsetHeight) ? Math.round(this.offsetHeight * 1.25) + 'px' : Math.round(i.height) + 'px';
					this.w = (this.img.offsetWidth - this.offsetWidth) * .5;
					this.h = (this.img.offsetHeight - this.offsetHeight) * .5;
					this.img.style.visibility = 'visible';
				}
			}
		}
		/* ==== start script ==== */
		sP.resize();
		sP.run();
	},
	resize: function() {
		/* ==== window resize ==== */
		var o = sP.scr;
		sP.nw = o.offsetWidth;
		sP.nh = o.offsetHeight;
		sP.iw = sP.pan.offsetWidth;
		sP.ih = sP.pan.offsetHeight;
		for (sP.nx = 0,
		sP.ny = 0; o != null ; o = o.offsetParent) 
		{
			sP.nx += o.offsetLeft;
			sP.ny += o.offsetTop;
		}
		for (var i = 0, o; o = sP.R[i]; i++)
			o.resize();
	},
	/* ==== main loop ==== */
	run: function() 
	{
		/* ==== scroll main frame ==== */
		sP.cx += (((Math.max(-sP.nw, Math.min(0, (sP.nw * .5 - (xm - sP.nx) * 2))) * (sP.iw - sP.nw)) / sP.nw) - sP.cx) * .1;
		sP.cy += (((Math.max(-sP.nh, Math.min(0, (sP.nh * .5 - (ym - sP.ny) * 2))) * (sP.ih - sP.nh)) / sP.nh) - sP.cy) * .1;
		sP.pan.style.left = Math.round(sP.cx) + 'px';
		sP.pan.style.top = Math.round(sP.cy) + 'px';
		/* ==== lissajou ==== */
		if (sP.O) {
			sP.O.c += .015;
			sP.O.img.style.left = Math.round(-sP.O.w + sP.O.w * Math.sin(sP.O.c * 1.1)) + 'px';
			sP.O.img.style.top = Math.round(-sP.O.h + sP.O.h * Math.sin(sP.O.c)) + 'px';
			sP.O.l.style.left = Math.round(sP.O.x--) + 'px';
		}
		/* ==== up ==== */
		if (sP.Or) 
		{
			sP.Or.p -= sP.Or.s;
			sP.Or.s *= 1.1;
			if (sP.Or.p < -sP.Or.offsetHeight) 
			{
				sP.Or.p = -sP.Or.offsetHeight;
				sP.Or.s = 2;
				sP.Or.m = false;
				sP.Or = false;
			}
			sP.O.style.top = Math.round(sP.O.p) + 'px';
		}
		/* ==== down ==== */
		for (var i = 0, c; c = sP.C[i]; i++) 
		{
			if (c != sP.Or) 
			{
				c.p += c.s;
				c.s *= 1.2;
				if (c.p >= 0) 
				{
					c.p = 0;
					c.s = 2;
					c.m = false;
					sP.C.splice(i, 1);
				}
				
				c.style.top = Math.round(c.p) + 'px';
			} else {
				c.s = 2;
				c.m = false;
				sP.C.splice(i, 1);
			}
		}
		setTimeout(sP.run, 16);
	}
}
/* ==== global mouse position ==== */
document.onmousemove = function(e) 
{
	if (window.event)
		e = window.event;
	xm = e.clientX;
	ym = e.clientY;
	return false;
}
/*********************************************<<<<<<<<<<<<<< bg 图片 js end >>>>>>>>>>>>>>>>>>>***************************************/    

window.onload = function(){
	/********************************************<<<<<<<<<<<<<<  火焰鼠标跟随 begin >>>>>>>>>>>>>>>>>>>**************************************/
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	//Make the canvas occupy the full page
	var W = window.innerWidth, H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	var particles = [];
	var mouse = {};
	
	//Lets create some particles now
	var particle_count = 50;
	for(var i = 0; i < particle_count; i++)
	{
		particles.push(new particle());
	}
	
	//finally some mouse tracking
	canvas.addEventListener('mousemove', track_mouse, false);
	
	function track_mouse(e)
	{
		//since the canvas = full page the position of the mouse 
		//relative to the document will suffice
		mouse.x = e.pageX;
		mouse.y = e.pageY;
	}
	
	function particle()
	{
		//speed, life, location, life, colors
		//speed.x range = -2.5 to 2.5 
		//speed.y range = -15 to -5 to make it move upwards
		//lets change the Y speed to make it look like a flame
		this.speed = {x: -2.5+Math.random()*5, y: -15+Math.random()*10};
		//location = mouse coordinates
		//Now the flame follows the mouse coordinates
		if(mouse.x && mouse.y)
		{
			this.location = {x: mouse.x, y: mouse.y};
		}
		else
		{
			this.location = {x: W/2, y: H/2};
		}
		//radius range = 10-30
		this.radius = 10+Math.random()*20;
		//life range = 20-30
		this.life = 20+Math.random()*10;
		this.remaining_life = this.life;
		//colors
		this.r = Math.round(Math.random()*255);
		this.g = Math.round(Math.random()*255);
		this.b = Math.round(Math.random()*255);
	}
	
	function draw()
	{
		//Painting the canvas black
		//Time for lighting magic
		//particles are painted with "lighter"
		//In the next frame the background is painted normally without blending to the 
		//previous frame
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, W, H);
		ctx.globalCompositeOperation = "lighter";
		
		for(var i = 0; i < particles.length; i++)
		{
			var p = particles[i];
			ctx.beginPath();
			//changing opacity according to the life.
			//opacity goes to 0 at the end of life of a particle
			p.opacity = Math.round(p.remaining_life/p.life*100)/100
			//a gradient instead of white fill
			var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
			gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
			ctx.fillStyle = gradient;
			ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
			ctx.fill();
			
			//lets move the particles
			p.remaining_life--;
			p.radius--;
			p.location.x += p.speed.x;
			p.location.y += p.speed.y;
			
			//regenerate particles
			if(p.remaining_life < 0 || p.radius < 0)
			{
				//a brand new particle replacing the dead one
				particles[i] = new particle();
			}
		}
	}
	
	setInterval(draw, 30);
/*********************************************<<<<<<<<<<<<<< 火焰鼠标跟随 js end >>>>>>>>>>>>>>>>>>>***************************************/
} 
/*************************************************** <<<<<<<<<<<<<<< js end >>>>>>>>>>>>>> *************************************************/


/************************************************** <<<<<<<<<<<<<<< jquery begin >>>>>>>>>>>>>> ************************************************/
/****************** <<<<<<<<<<<<<<< 先加载 jQuery 再加载 DOM >>>>>>>>>>>>>> *******************/
/**************** 打字 ***************/
$(function(){
	$('.tz_dljs')
  .typetype('Hello, world! Hello, world! Hello, world! \n Hello, world! Hello, world! \n Hello, world!')
  .delay(1000)
  .typetype('\n\nend.')
  //.backspace(25)
  //.fadeOut() // jQuery效果
});

$(function(){
	$('.main_href_txt')
  .typetype('Hello, world!')
  .delay(1000)
  .typetype('\n\nend.')
  .backspace(25)
  //.fadeOut() // jQuery效果
});

$(function(){	
	$('.tz1_0').mouseover(function(){
		$(this).hide();
		$('.tz0').show();
		$('.tz0').typetype('登录')
	});

	$('.tz1_1').mouseover(function(){
		$(this).hide();
		$('.tz1').show();
		$('.tz1').typetype('个人站')
	});
	
	$('.tz2_2').mouseover(function(){
		$(this).hide();
		$('.tz2').show();
		$('.tz2').typetype('个人简历')
	});
});
/**************** 打字 ***************/

/**************** 跳转 ***************/
$(function(){
	/*$('.tz1').toggle(
		function(){
			$('.hrtmain_content_wrap').hide();
			$('#myCanvas').hide();	
			$('.bg').hide();
			$('.main-wrap').show();
			$('.fhref').show();
			$('html').css('background','#fff');
		},
		function(){
			$('.hrtmain_content_wrap').show();
			$('#myCanvas').show();	
			$('.main-wrap').hide();
			$('.fhref').hide();
			$('html').css('background','#000');
		}
	);	*/
	$('.tz1').toggle(
		function(){
			//window.open('index.html','_blank');	
			$('.hrtmain_content_wrap').hide();
			$('#myCanvas').hide();	
			$('.bg').hide();
			$('.main-wrap').show();
			$('.fhref').show();
			$('.conmm').show();
			$('html').css('background','#fff');
				
		},
		function(){}
	);
});

/*$(function(){
	if($('.music_ico').show){
		$('.conmm').hide();	
	}else{
		$('.conmm').show();	
	}	
});*/
/**************** 跳转 ***************/

$(function(){
	$('.tz2').toggle(
		function(){
			//window.location.href = 'PCResume.html';
			window.open('PCResume.html','_blank');
		},
		function(){}
	);	
});

$(function(){
	$('.edit_a').click(function(){
		window.open('../study/edit.html','_blank');
	});	
	$('.edit_a').mouseover(function(){
		$(this).css('color','rgba(222, 182, 31, 1)');	
	});
	$('.edit_a').mouseleave(function(){
		$(this).css('color','#9AE4DE');	
	});
});
/**************** 更换背景 ***************/
$(function(){
	$('.change_bg').toggle(
		function(){
			$('#myCanvas').hide();	
			$('html').css('background','#fff');	
			$('.bg').show();
			$(this).text('酷炫鼠标');
		},
		function(){	
			$('#myCanvas').show();	
			$('html').css('background','#000');	
			$('.bg').hide();
			$(this).text('照片墙');
		}
	);
});

/**************** 更换背景 ***************/

/**************** 去掉音乐图标 ***************/
$(function(){
	$('.music_ico').toggle(
		function(){
			$('.music').hide();	
			$(this).text('去掉音乐图标');
		},
		function(){	
			$('.music').show();	
			$(this).text('还原音乐图标');
		}
	);
});

/**************** 去掉音乐图标 ***************/

$(function(){
	$('.play_sb').click(function(){
		//$('#myCanvas').show();
		$('.hrtmain_content_wrap').hide();	
	});	
	
	$('#myCanvas').click(function(){
		$('.hrtmain_content_wrap').show();	
		//window.location.href = 'index.html';
	});
	
	$('#pan').click(function(){
		$('.hrtmain_content_wrap').show();	
		//window.location.href = 'index.html';
	});
});

/*$(function(){
	$('.bg_screen').mouseout(function(){
		$(this).css('transition','1s linear');
	});	
});*/

/*********** main_content_wrap_screen_height jquery begin(判断屏幕高度) ***********/
/*$(function(){
	var navHeigth = $('.nav').height();
	//alert(navHeigth);
	var windowHeight = $(window).height();
	$('.main_content_wrap').attr('height', windowHeight - navHeigth + 'px');
});*/

/*$(function(){
	var windowHeight = $(window).height();

	
	$('.main_content_wrap').attr('height', windowHeight);
});*/

$(function(){
	var headerHeight  = $('.header_wrap').height();
	var windowHeight = $(window).height();
	$('.body_cont_wrap').css('height', windowHeight-headerHeight + 'px');
});
/************ main_content_wrap_screen_height jquery end(判断屏幕高度) ************/

/****************** 下拉 ********************/
$(function(){
	$('.aside_left_box li a').click(function(){
		//$('.aside_left_box li a[href="javascript:;"] + ul li').removeClass('aside_left_current');
		//$(this).addClass('aside_left_current');
		$(this).next().toggle('slow');
	});
	//$('li a').click(function(){})
});
/****************** 下拉 ********************/

$(function(){
	$('.aside_left_cont').mouseover(
		function(){
			$(this).css('transition','1s linear');
			$(this).css('background','rgba(17, 140, 168, 0.74)');
		}
	);
	$('.aside_left_cont').mouseleave(
		function(){
			$(this).css('transition','1s linear');
			$(this).css('background','none');
		}
	);
});

$(function(){
	$('.nav').mouseover(
		function(){
			$(this).css('transition','1s linear');
			$(this).css('background','rgba(17, 140, 168, 0.74)');
			$('.nav_picture img').css('border-radius','60px');
			$('.nav_picture img').css('opacity','1');
			$('.nav_picture p').css('transition','1s linear');
			$('.nav_picture p').css('opacity','1');
		}
	);
	$('.nav').mouseleave(
		function(){
			$(this).css('transition','1s linear');
			$(this).css('background','rgba(17, 140, 168, 0.14)');
			$('.nav_picture img').css('transition','1s linear');
			$('.nav_picture img').css('border-radius','60px');
			$('.nav_picture img').css('opacity','0.54');
			$('.nav_picture p').css('transition','1s linear');
			$('.nav_picture p').css('opacity','0.64');
		}
	);
});

/*$(function(){
	$('nav li').hover(
		function(){
			$('nav li').find().sildeDown('slow');	
		},
		function(){
			$('nav li').find().sildeUp('slow');		
		}
	);	
});*/

$(function(){
    $('nav li').hover(
        function(){
            $(this).find('ul').slideDown();
        },
        function(){
            $(this).find('ul').slideUp();
        }
    );
});


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
/*$(document).ready(function(){
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
});*/


$(function(){
	$('.music').click(
		function(){},
		function(){
				$("#jquery_jplayer_1").jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						mp3:"../public/music/xf.mp3"
					}).jPlayer("play").jPlayer("repeat");
				},
				swfPath: "js",
				supplied: "mp3",
				wmode: "window",
				smoothPlayBar: true,
				keyEnabled: true
			});	
		}
	);	
});
/**************** 停止/播放 图标 转换 播放 ***************/

$('#text_cont_view').load(function(){
/*	$.ajax({
		url:'../php/process.php?'+Math.random(),
		type:'get',
		success: function(data){
			var res = eval(data);
			$('#text_cont_view').html();	
		}	
	});	*/
	 //this.load('process.php?date='+Math.random());     
});

/****************** <<<<<<<<<<<<<<< 先加载 jQuery 再加载 DOM >>>>>>>>>>>>>> *******************/

/****************** <<<<<<<<<<<<<<< 先加载 DOM 再加载 jQuery >>>>>>>>>>>>>> *******************/
$(window).load(function(){
	//$('textarea').click();
});
/****************** <<<<<<<<<<<<<<< 先加载 DOM 再加载 jQuery >>>>>>>>>>>>>> *******************/
/*************************************************** <<<<<<<<<<<<<<< jquery end >>>>>>>>>>>>>> 
*************************************************/  