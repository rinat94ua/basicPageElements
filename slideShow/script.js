jQuery(function($){
	$('.slideshow__link').click(function(event){
		event.preventDefault();

		var $this = $(this),
				item = $this.closest('.slideshow__item'),
				container = $this.closest('.slideshow'),
				display = container.find('.slideshow__display'),
				path = item.find('img').attr('src'),
				duration = 300;

		if(!item.hasClass('active')) {
			item.addClass('active').siblings().removeClass('active');
			display.find('img').fadeOut(duration, function() {
				$(this).attr('src', path).fadeIn(duration);
			});
		}

	});
});