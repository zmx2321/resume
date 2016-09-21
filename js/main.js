console.log('This would be the main JS file.');
/* navList s */
;(function( $ ){
    $.fn.navList = function(options){
        var defaults = {
            eventType1:'click',
        }

        var options = $.extend(defaults,options);

        this.each(function(){
			$(this).find('li').bind(options.eventType1,function(){
				$(this).addClass('nav_on').siblings().removeClass('nav_on');
				$('article section').hide();
				id=$(this).attr('id');
				$("."+id+"_box").show();
			});
			$(this).find('li:not(.introduce)').bind(options.eventType1,function(){
			    console.log($(this).find('li:not(.introduce)'));
			});
			$(this).find('li.introduce').bind(options.eventType1,function(){
			    console.log($(this).find('li.introduce'));
			});
        });
    }
})(jQuery);

$(function(){
    $('nav ul').navList();
});

/* navList e */