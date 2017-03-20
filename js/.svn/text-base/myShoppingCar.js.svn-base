$(function(){
	/*尚未完成的效果
	1.商品购物车多个商品的时候总价计算；
 		 弹出价格修改框；
  		有商品的时候下面推荐出现，没有隐藏；
 		 单击相应的加入购物车时，将推荐里面的添加到购物车并消失
*/
	var delebtn=$(".car .delet"),
		num=$(".car .pro_num"),
		total=$(".car .pro_total"),
		danjia=$(".proNo_pric"),
		content=$(".car .content"),
		result=$(".pay_result"),
		notice=$(".car .change_notice"),
		close=notice.find(".close"),
		clear_all=$(".car .clear_all");
		var con;
		//删除按钮
		delebtn.each(function(){
			$(this).click(function(){
				$(this).parent().html("").css({"border":"none 0","height":"0"});
			})
		})
		//打开页面就运行
		result.find("span").text(num.val()*danjia.text());
		//修改数量之后
		num.blur(function(){
			result.find("span").text(num.val()*danjia.text());
			notice.find("span").text("￥"+num.val()*danjia.text()).end().show();
		});
		//关闭操作成功提示
		close.click(function(){
			$(this).parent().hide()
		});
		//删除全部按钮
		function clearall(){
			 con=confirm("您确定要清空购物车？");
			return con;
			
		}
		clear_all.click(function(){
			clearall();
			if(con==true){
				content.html("").css({"border":"none 0","height":"0"});
				result.find("span").text(0);
			}
		})
		//只有一个商品的时候
})
