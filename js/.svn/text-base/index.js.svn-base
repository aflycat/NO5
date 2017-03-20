jQuery(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>900){
			$("#navWrap").css({"position":"fixed","top":"0"})
			$("#navWrap").find(".nav_fir_detail").css({"display":"none"})
			$("#navWrap").find(".nav_fir").hover(function(){
				$(this).find(".nav_fir_detail").fadeIn()
			})
		}else{
			$("#navWrap").css({"position":"absolute","top":"124px","z-index":"2"})
			$("#navWrap").find(".nav_fir_detail").css({"display":"block"})
		}
		
		
	})
	
})
