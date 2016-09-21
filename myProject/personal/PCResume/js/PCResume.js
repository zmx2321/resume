// JavaScript Document
/**************** fh ***************/
$(function(){
	$('.fh_top').click(function(){
		 $('article').animate({scrollTop: '0px'}, 800);	
		 alert(1);
		 $('article').css('top','0');	
		 $('article').animate({scrollTop:$('#id3').offset().top}, 800);
	});	
});
/**************** fh ***************/