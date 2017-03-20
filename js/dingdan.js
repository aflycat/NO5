
$(function(){
	
	    $("#headerWrap").load("header.html");
	    $("#footerWrap").load("footer.html");
		$("#navWrap").load("Nav.html",function(){
				$("#navWrap").find(".nav_fir_detail").css({"display":"none"});
				$("#navWrap").find(".nav_fir").hover(function(){
				$(this).find(".nav_fir_detail").stop().slideDown(200);
						},function(){
							$(this).find(".nav_fir_detail").stop().slideUp(200);
						})
						
		})
	
		
})