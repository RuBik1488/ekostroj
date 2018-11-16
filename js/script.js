$('.price__title-bg').click(function() {
	$(this).parent().find('.price__hide').toggle(100);
});
$('.nav-menu img').click(function() {
	$('.nav-mob').fadeIn(300);
	$('.nav-mob-bg').fadeIn(100);
});
$('.nav-close').click(function() {
	$('.nav-mob').fadeOut(100);
	$('.nav-mob-bg').fadeOut(300);
});