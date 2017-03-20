jQuery(function(){
	var Nav=$("#nav_wrap");
	var nav_sec=Nav.find(".nav_sec");
	nav_sec.each(function(){
		$(this).hover(function(){
			$(this).find(".nav_thir").show();
		},function(){
			$(this).find(".nav_thir").hide();
		})
	})
	
})
