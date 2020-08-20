import { sliders } from "./sliders";
import { config } from "../config";
require('sly-scrolling/dist/sly');

var thumbnails = {
	
	items: $('.js-product-thumbnails'),

	init: () => {

		if (!thumbnails.items.length)
			return false;

		config.log('thumbnails init')


		thumbnails.items.each((i, el) => {

			let $box = $('.js-product-thumbnails'),
				$nav = [$(el).find('.js-up'), $(el).find('.js-down')];
			
			let position = 0;
			
			if ( $(window).innerWidth() < 830 ) {
				position = 1;
			}

			$box.sly({
				horizontal: position,
				itemNav: 'basic',
				smart: 1,
				activateOn: 'click',
				mouseDragging: 1,
				touchDragging: 1,
				releaseSwing: 1,
				scrollBar: false,
				scrollBy: 1,
				scrollHijack: 5,
				scrollTrap: true,
				speed: 300,
				elasticBounds: 1,
				prev: $nav[0],
				next: $nav[1],
				dragHandle: 1,
				dynamicHandle: 1,
				clickBar: 1,
				cycleBy: 'items',
			}).sly('on', 'active', (eventName, itemIndex) => {

				let $parent = $box.closest('.js-slider-parent');

				let owl = $parent.find('.owl-carousel');

				owl.owlCarousel();

				owl.trigger('to.owl.carousel', [itemIndex]);

			});

		});

	}

};

export { thumbnails };