jQuery(function($){
	$('.tabs__controls-link').click(function(event){
		event.preventDefault();

		// по порядковому номеру		
		// var item = $(this).closest('.tabs__controls-item'),
		// 		content = $('.tabs__item'),
		// 		itemPosition = item.index();

		// content.eq(itemPosition)
		// 	.add(item)
		// 	.addClass('active')
		// 	.siblings()
		// 	.removeClass('active');

		//по дата-атрибуту
		var item = $(this).closest('.tabs__controls-item'),
				content = $('.tabs__item'),
				itemPosition = item.data('class');

		content.filter('.tabs__item--' + itemPosition)
			.add(item)
			.addClass('active')
			.siblings()
			.removeClass('active');
	});
});