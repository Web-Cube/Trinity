import 'jquery-ui/ui/widgets/slider';
require('jquery-ui-touch-punch');
import { config } from "../config";

var filter = {
	
	cost: () => {
		
		var thousandSeparator = str => {
			var parts = (str + '').split('.'),
				main = parts[0],
				len = main.length,
				output = '',
				i = len - 1;

			while(i >= 0) {
				output = main.charAt(i) + output;
				if ((len - i) % 3 === 0 && i > 0) {
					output = ' ' + output;
				}
				--i;
			}

			if (parts.length > 1) {
				output += '.' + parts[1];
			}
			return output;
		};
		
		$('.js-cost').each(function(){
			let min = $(this).data('min'),
				max = $(this).data('max');
			
			$('.js-cost-slider').slider({
				range: true,
				min: min,
				max: max,
				values: [ min, max ],
				slide: function( event, ui ) {
					
					$('.js-cost-from').val( thousandSeparator( ui.values[ 0 ] ) ).data('value', ui.values[ 0 ]);
					$('.js-cost-to').val( thousandSeparator( ui.values[ 1 ] ) ).data('value', ui.values[ 1 ]);
					
				}
			});
			
			$('.js-cost-input').focus(function(){
		
				$(this).val( $(this).data('value') );

			}).blur(function(){

				$(this).val( thousandSeparator( $(this).val() ) );

			}).keyup(function(){
				
				$(this).data('value', $(this).val() );

				$('.js-cost-slider').slider({
					values: [ $('.js-cost-from').data('value'), $('.js-cost-to').data('value') ]
				});

			});
			
		});
	},

	category: () => {
		
		$('.filter__category-head').click(function(){
			
			$(this).parent().toggleClass('is-active');
			
		});
		
		$('.filter__submenu-link').click(function(){
			let value = $(this).data('value');
			let icon = $(this).parent().find('.filter__submenu-icon svg').clone();
			
			$('.filter__submenu-link.is-active').removeClass('is-active');
			$(this).addClass('is-active');
			$(this).closest('.has-submenu').find(".filter__submenu-parent .filter__submenu-link").addClass('is-active');
			$(this).closest('.filter__category').removeClass('is-active').find('.filter__category-input').val(value);
			
			$('.filter__category-select .filter__submenu-link').text(value);
			$('.filter__category-select .filter__submenu-icon').html(icon);
		});
		
		$(".filter__submenu-arrow").click(function(){
			$(this).closest('.has-submenu').toggleClass('is-active').find('.filter__submenu').slideToggle(300);
		});
		
	},
	
	init: () => {
		
		filter.category();
		filter.cost();
		
		$('.js-filter-show').click(function(){
			$('.filter').fadeIn(500);
			$('body').addClass('is-lock');
		});
		
		$('.js-filter-close').click(function(){
			$('.filter').fadeOut(500);
			$('body').removeClass('is-lock');
		});
		
		
	}
}

export { filter }