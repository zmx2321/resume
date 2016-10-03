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
				$("."+id+"_box").empty();
				main_index_box = "<p class='aaa'>首页132</p>";
				pson_info_box = "<p>关于我12</p>";
				job_skill_box = "<p>专业技能</p>";
				experience_box = "<p>我的经历</p>";
				opus_box = "<p>设计中</p>";
				contact_box = "<p>联系我</p>";
				$(".main_index_box").append(main_index_box);
				$(".pson_info_box").append(pson_info_box);
				$(".job_skill_box").append(job_skill_box);
				$(".experience_box").append(experience_box);
				$(".opus_box").append(opus_box);
				$(".contact_box").append(contact_box);
			});
        });
    }
})(jQuery);

$(function(){
    $('nav ul').navList();
});
/* navList e */