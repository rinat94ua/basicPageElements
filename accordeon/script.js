jQuery(function($){
	$('.accordeon__trigger').click(function(event) {
		event.preventDefault();

		var $this = $(this),
				item  = $this.closest('.accordeon__item'),
				list  = $this.closest('.accordeon__list'),
				items = list.find('.accordeon__item'),
				content = item.find('.accordeon__inner'),
				otherContent = list.find('.accordeon__inner'),
				duration = 300;


		if (!item.hasClass('active')) {
			items.removeClass('active');
			item.addClass('active');

			otherContent.stop(true, true).slideUp(duration);
			content.stop().stop(true, true).slideDown(duration, function() {

			});
		} else {
			content.stop(true, true).slideUp(duration);
			item.removeClass('active');
		}
	});
});