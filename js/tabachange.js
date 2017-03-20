$(function(){
	
	$("#tachg_wrap").find("li").hover(function(){
		$(this).css({"borderBottom":"4px solid #3498db"}).siblings().css({"borderBottom":"none 0"})
		$(this).find(".shangjiantou").show().end().siblings().find(".shangjiantou").hide();
		$(this).find(".star_tujian").show().end().siblings().find(".star_tujian").hide();
	},function(){
		
	})
	
})
