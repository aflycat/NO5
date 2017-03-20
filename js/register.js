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
	
	var reg1=new RegExp("^[0-9a-zA-Z\u4e00-\u9fa5_@]{3,30}$"),
	//数字字母汉字下划线@  3到30位
//	reg3=new RegExp("^{6,16}$"),
	reg2=new RegExp("^(?![\d]+$)(?![a-zA-Z]+$)(?![^\da-zA-Z]+$).{6,16}$"),
	//数字+字母，数字+特殊字符，字母+特殊字符，数字+字母+特殊字符组合，而且不能是纯数字，纯字母，纯特殊字符
	reg4=new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$"),	
	//邮箱的正则表达式
	mid=$("#midWrap"),
	register=mid.find(".register"),
	
	re_name=$("#name"),
	//登陆界面的用户名的值
	re_pass=$("#pass"),
	re_yanzsr=$("#yanzheng"),
	re_yanznotice=$(".register .yanzheng_wrap .text"),
	re_yanzhengwrap=$(".register .yanzheng_wrap"),
	regbtn=$("#midWrap .register .register_btn"),
	//如何取得验证码的值
	//注册模块的
	si_name=$("#si_name"),
	si_pass=$("#si_pass"),
	si_re_pass=$("#si_repass"),
	si_mail=$("#si_email"),
	si_yanzsr=$("#si_yanzheng"),
	si_yanznotice=$(".sign .text").text(),
	sibtn=$(".sign .sign_btn");
	var inputs=$(".register input");
	var siinputs=$(".sign input");
	
	//登陆界面的函数
//	1.点击登陆的时候:用户名和密码有一项不对的时候提示密码或者用户名不对;
//				 哪项为空提示哪项;
//				 验证码不对提示.
	//验证码生成
	
	var code="";
	var arr=["0","1","2","3","4","5","6","7","8","9"];
	for(var i=0;i<4;i++){
		var x=Math.floor(Math.random()*10);
		code+=arr[x];
	}
	re_yanznotice.text(code);
	
	regbtn.click(function(){
		inputs.each(function(){
			!$(this).val()?$(this).parent().find("p").eq(0).show():$(this).parent().find("p").eq(0).hide();
			//哪个为空哪个提示
		});
		//避免为空时提示验证码错误
		re_yanzsr.val()==re_yanznotice.text()?re_yanznotice.parent().find("p").eq(1).hide()
		:re_yanzhengwrap.find("p").eq(0)?re_yanznotice.parent().find("p").eq(1).hide()
		:re_yanznotice.parent().find("p").eq(1).show();
		
	})
//注册
    //在后面加上全部提示内容，或者让他为空然后字符添加
//  1用户名获取焦点提示 第一个p
//   	失去焦点检测提示  if重复   提示第三个p if格式不正确 提示第二个p
//  2密码获取焦点提示第一个p
//  	 失去焦点比较密码长度
//  3re密码获取焦点提示第一个p
//  	 失去焦点和上一个密码对比错误提示两次输入不一样
//  4邮箱获取焦点,无提示;
//  	失去焦点若为空提示请输入邮箱
//  	重复提示该邮箱以被使用
//  	格式不正确提示格式不对
//	5验证码为空提示请输入验证码
	sibtn.click(function(){
		siinputs.each(function(){
			!$(this).val()?$(this).parent().find("p").eq(0).show()
			:$(this).parent().find("p").eq(0).hide();
		});
		
	});
	
	puanduan(si_name,namepd);
	puanduan(si_pass,passpd);
	
	
	function puanduan(self,fn){
			self.focus(function(){
				$(this).parent().find("p").eq(1).show();
				$(this).parent().find("p").eq(0).hide();
			}).blur(function(){
				fn();
				$(this).parent().find("p").eq(0).show();
				$(this).parent().find("p").eq(1).hide();
				if(fn()==true){
					$(this).parent().find("img").show();
					$(this).parent().find("p").eq(0).hide();
					$(this).parent().find("p").eq(1).hide();
				}else{
					$(this).parent().find("p").eq(0).show();
					$(this).parent().find("p").eq(1).hide();
				}
			
				
			});
			
	}
	function namepd(){
		reg1.test(si_name.val());
		return reg1.test(si_name.val());
			}
	function passpd(){
		reg2.test(si_pass.val());
		return reg2.test(si_pass.val());
	}
	function emailpd(){
		reg4.test(si_mail.val());
		return reg4.test(si_mail.val());
	}
	

	
	
	
})
