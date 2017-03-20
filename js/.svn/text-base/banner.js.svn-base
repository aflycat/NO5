jQuery(function(){
	(function(){
		var banner=$("#banner_wrap");
		var btn=banner.find(".banner_control div");
		var movediv=banner.find(".move_back");
		var nowindex=1;
		var timer=null;
		var index;
		var num=movediv.length;
		timer=setInterval(dofade,4000);
		btn.hover(function(){
			index=$(this).index()
			clearInterval(timer);
			$(this).addClass("now").siblings().removeClass("now");
			movediv.eq(index).fadeIn(600).siblings().fadeOut(600);
			
		},function(){
			
			nowindex=index;
			timer=setInterval(dofade,4000);
		})
		
		function dofade(){
			movediv.eq(nowindex).fadeIn(600).siblings().fadeOut(600);
			nowindex++;
			
			indexchange();
		};
		function indexchange(){
			if (nowindex>num-1) {
				nowindex=0;}
				
			btn.eq(nowindex-1).addClass("now").siblings().removeClass("now");
		};
	})();
	
	(function(){
		var banner_bot=$("#banner_bot");
		
		var move_notice=$("#banner_bot .move_notice");
		var notice=banner_bot.find(".notice");//
		var timer=null;
		timer=setInterval(dochange,2000)
		function dochange(){
			move_notice.animate({"top":"-34px"},500,function(){
				notice.first().appendTo(move_notice);
				move_notice.css({"top":'0'});
			})
		}
	})();
	
})
