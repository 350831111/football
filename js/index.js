;(function($){
	function init(){
		setTimeout(function(){
			$(".swiper-container").swiper({
				onSetTranslate:function(swiper){
					$("#tab-ul li").eq(swiper.activeIndex)
					.addClass("bg2").siblings().removeClass("bg2");
				}
			})
			$("#tab-ul li").on("click",function(){
				var index=$(this).index();
				$(this).addClass("bg2").siblings().removeClass("bg2");
				/*$(".swiper-container").slideTo(index,300,false)*/
			})
		},2000)


	}

	init();
})(jQuery)