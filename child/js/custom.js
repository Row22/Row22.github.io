$(function(){
	$('.menu-toggle').click(function(){
		$(this).toggleClass('active')
		$('.menu').slideToggle(700);
	})
})


$(function(){
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	})
});


$(function(){
	('id').click(function(){
	var id = document.preventDefault('name');
	if ('.name').placeholder = '';
	})
});




