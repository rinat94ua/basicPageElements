jQuery(function($){
	$('.slider__controls-button').click(function(event){
		event.preventDefault();

		var $this = $(this),
				container = $this.closest('.slider'),
				list = container.find('.slider__list'),
				items = container.find('.slider__item'),
				activeSlide = items.filter('.active'),
				nextSlide = activeSlide.next(),
				prevSlide = activeSlide.prev(),
				firstSlide = items.first(),
				lastSlide = items.last(),
				sliderOffset = container.offset().left,
				reqPost = 0;

		if ($(this).hasClass('slider__controls-button--next')) {

			if (nextSlide.length) {
				findReqPos(nextSlide);
				removeActiveClass(nextSlide);
			} else {
				findReqPos(firstSlide);
				removeActiveClass(firstSlide);
			}

		} else {

			if (prevSlide.length) {
				findReqPos(prevSlide);
				removeActiveClass(prevSlide);
			} else {
				findReqPos(lastSlide);
				removeActiveClass(lastSlide);
			}

		}

		list.css('left', '-=' + reqPost + 'px');

		function removeActiveClass(reqSlide) {
			reqSlide.addClass('active').siblings().removeClass('active');
		}

		function findReqPos (slide) {
			reqPos = slide.offset().left - sliderOffset;
		}
	});
});