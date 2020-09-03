import 'jquery-ui/ui/widgets/slider';
require('jquery-ui-touch-punch');
import { config } from "../config";

var filter = {
	
	init: () => {
		
		$('.filter__head').click(function(){
			$(this).closest('.filter__item').toggleClass('is-active');
			$(this).closest('.filter__item').find('.filter__list').slideToggle(300);
		});
		
		$('.js-filter-close').click(function(){
			$('.filter').fadeOut(500);
			$('body').removeClass('is-lock');
		});
		
		
	}
}

export { filter }