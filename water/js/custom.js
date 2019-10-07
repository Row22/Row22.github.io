$(function(){
	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(700)
	})
})

	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});


	

$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrow: false,
  appendArrows: '.slider_item_buttons',
  prevArrow:'<button type="button" class="slick-prev"><span class="icon-left"></span></button>',
  nextArrow: '<button type="button" class="slick-next"><span class="icon-right"></span></button>',
});









