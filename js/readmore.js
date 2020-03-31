// $(function(){
// 	var jj=1;
// 	if(jj !=0){
// 		var widHeight = $(window).height();
// 		var artHeight = $('#conten').height();
// 		if(artHeight<widHeight){
// 			console.log(artHeight)
// 			console.log('没打印？')
// 			$('#conten').height(widHeight*1.5-785).css({'overflow':'hidden'});
// 			var article_show = true;
// 			$('.read_more_btn').on('click',bindRead_more);
// 		}else{
// 			console.log(widHeight)
// 			console.log(artHeight)
// 			console.log('嗯哼')
// 			article_show = true;
// 			$('.readall_box').hide().addClass('readall_box_nobg');
// 		}
	
// 	}else{
// 		console.log('这里没有折叠判断')
// 		article_show = true;
// 			$('.readall_box').hide().addClass('readall_box_nobg');
// 		return false
// 	}
// 	function bindRead_more(){
// 		if(!article_show){
// 			$('#conten').height(widHeight*1.5).css({'overflow':'hidden'});
// 			$('.readall_box').show().removeClass('readall_box_nobg');
// 			article_show = true;
// 		}else{
// 			$('#conten').height("").css({'overflow':'hidden'});
// 			$('.readall_box').show().addClass('readall_box_nobg');
// 			$('.readall_box').hide().addClass('readall_box_nobg');
// 			article_show = false;
// 		}
// 	}
// })