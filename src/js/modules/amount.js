var amount = {

	init: () => {
		
		$(".amount__btn").click(function(){
			let amount = $(this).parent().find('.field__input');
			let amountValue = $(this).parent().find('.field__input').val();
			
			if ( $(this).hasClass('amount__btn_minus') && amountValue > 1  ) {
				amountValue--;
			} if ( $(this).hasClass('amount__btn_plus') ) {
				amountValue++;
			}
			
			amount.val(amountValue);
			
		});
	}
}

export { amount }