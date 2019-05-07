$(function(){
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});


$('.slider_item').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrow: false,
  appendArrows: '.slider_item_buttons',
  prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
});

});

