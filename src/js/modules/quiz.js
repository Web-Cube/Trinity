var quiz = {

	init: () => {
		
		$(".js-next-step").click(function(){
			
			$('.quiz__services').hide();
			$('.quiz__form').fadeIn(500);
			
		});
		
		$(".js-back-step").click(function(){
			
			$('.quiz__form').hide();
			$('.quiz__services').fadeIn(500);
			
		});
		
		$('.js-quiz-radio').change(function(){
			
			let name = $(this).attr('name');
			let text = $(this).val();
			let price = $(this).data('price');
			
			$('.js-'+name).html( text );
			
		});
		
		$('.js-quiz-checkbox').change(function(){		
			let arrText = [];
			
			arrText = $('.js-quiz-checkbox:checked').map(function(currElement, arr) {
				let length = $('.js-quiz-checkbox:checked').length-1;
				
				if ( currElement == length ) {
					return $(this).val() + '.';
				} else {
					return $(this).val() + ', ';
				}
			}).get();
			
			$('.js-extra').html( arrText );
			
		});
		
		$('.js-quiz-checkbox, .js-quiz-radio').change(function(){
			let price = $(this).data('price');
			let arrPrice = [];
			
			
			if ( price ) {
				arrPrice = $('.js-quiz-checkbox:checked, .js-quiz-radio:checked').map(function() {
					return $(this).data('price');
				}).get();

				$('.js-price').html( price );
				
				function arraySum(array){
					var sum = 0;
					for(let i = 0; i < array.length; i++){
						sum += array[i];
					}
					$('.js-total-price').html( sum );
				}
				arraySum(arrPrice);
			}
			
		});
	}
}

export { quiz }