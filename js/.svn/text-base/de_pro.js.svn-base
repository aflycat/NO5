
$(function(){
	
	    $("#headerWrap").load("header.html");
	    $("#footerWrap").load("footer.html")
		$("#navWrap").load("Nav.html",function(){
				$("#navWrap").find(".nav_fir_detail").css({"display":"none"});
				$("#navWrap").find(".nav_fir").hover(function(){
				$(this).find(".nav_fir_detail").stop().slideDown(200);
						},function(){
							$(this).find(".nav_fir_detail").stop().slideUp(200);
						})
						
		});
	//查看图片
	var lis=$("#buyWrap .lunbo_list li");
	var pics=$("#buyWrap .lunbo_pre li");
	var picswid=pics.width();//预览图li的、宽
	var picshei=pics.height();//高
	var fangda_img=$("#buyWrap .fangda_img");
	var mengban=$(".mengban");
	var moveimg=fangda_img.find("img");
	var mengbanwid=mengban.width();//蒙板的宽
	var mengbanhei=mengban.height();//蒙板的高
	var multiple=null;
	lis.each(function(i,ele){
		$(this).hover(function(){
			pics.eq(i).show().siblings().hide();
			fangda_img.find("img").eq(i).show().siblings().hide();//放大镜最大的图片显示和隐藏
		})
		
	})
	//放大镜
	   	
		   	
		   	
	pics.each(function(i){
		$(this).mousemove(function(e){
		fangda_img.add(mengban).show()
		var iX = e.pageX - pics.eq(i).offset().left - mengbanwid/2,
		   	iY = e.pageY - pics.eq(i).offset().top - mengbanhei/2,	
		   	MaxX = picswid-mengbanwid,//蒙板移动的最大左右距离
		   	MaxY = picshei-mengbanhei;//蒙板移动的最大上下距离
			iX=iX>0?iX:0;//左右移动的距离
		   	iX=iX>MaxX?MaxX:iX;
		   	iY=iY>0?iY:0;//上下移动的距离
		   	iY=iY>MaxY?MaxY:iY;
		   	console.log(iX+"ddd"+iY)
		   	mengban.css({"top":iY+"px","left":iX+"px"})
		   	
		   	//蒙板跟随鼠标移动效果
//		放大镜里面的图片移动效果
			multiple = pics.width()/mengban.width();
			moveimg.css({"marginLeft":-multiple*iX+"px","marginTop":-multiple*iY+"px"})
		});
		$(this).mouseout(function(){
			fangda_img.add(mengban).hide()
			})
	})//放大镜的显示和隐藏
  //数量的加减
	var plus=$(".plus");
	var minus=$(".minus");
	var inputs=$(".want_buy input");
	var num=1;
	plus.click(function(){
		num++;
		inputs.attr({"value":num})
	});
	minus.click(function(){
		num==0?num==0:num--;
		inputs.attr({"value":num})
	})
	//banner切换
	var banbtns=$("#buyWrap .pro_ban .pro_ban_nav div")
	var bans=$("#buyWrap .ban_content .content_one")
	banbtns.each(function(i,elem){
		$(this).click(function(){
			bans.eq(i).show().siblings().hide()
			
		})
	})
	
	//banner吸顶菜单
	var bannav=$("#buyWrap .pro_ban .pro_ban_nav");
	$(window).scroll(function(){
		if($(window).scrollTop()>640){
			bannav.css({"position":"fixed","top":"0px"});
			bannav.find("p").show();
			banbtns.click(function(){
				$(window).scrollTop(640)
			})
		}else{
			bannav.css({"position":"relative"});
			bannav.find("p").hide();
		}
		
		
	})
})
