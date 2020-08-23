import Inputmask from "inputmask";
import validate from "jquery-validation";
import { config } from "../config";

var forms = {
	mask: () => {
		var selector = document.querySelectorAll("input[name='phone']");

		var im = new Inputmask({
			mask: "+7 (999) 999-99-99",
			clearMaskOnLostFocus: true,
			clearIncomplete: true,
		});

		im.mask(selector);
		
	},

	validate: () => {
		$("form").each((i, el) => {
			var $form = $(el);

			$form.validate({
				errorPlacement: function (error, element) {
					//just nothing, empty
				},
				highlight: (element, errorClass, validClass) => {
					$(element)
						.parent()
						.addClass(errorClass)
						.removeClass(validClass);
				},
				unhighlight: (element, errorClass, validClass) => {
					$(element)
						.parent()
						.removeClass(errorClass)
						.addClass(validClass);
				},
				submitHandler: (form) => {
					var data = $(form).serialize();
					var thank = $(form).data('thank');
					
					if ( thank ) {
						sucsess(thank);
					}
					
					$.ajax({
						type: "POST",
						url: $(form).attr("action"),
						data: data,
						success: function (data) {
							$(form)[0].reset();
						},
					});
				},
				rules: {
					phone: {
						required: true,
						minlength: 5,
					},
				},
			});
		});
		
		function sucsess(name) {
			$.magnificPopup.open({
				tClose: 'Закрыть',
				removalDelay: 600,
				fixedContentPos: true,
				fixedBgPos: true,
				overflowY: 'hidden',			
				closeMarkup: '<div class="modals__close close js-close-modal"><svg class="icon icon-close" viewBox="0 0 17 17"><use xlink:href="/app/icons/sprite.svg#close"></use></svg></div>',
				mainClass: 'css-modal-animate',				
				items: {
					src: name,
					type: 'inline'
				},
				callbacks: {
					beforeOpen: () => {
					},

					beforeClose: () => {
					}
				}
			}, 0);
		}
	},

	events: () => {
		$(".input__field")
			.on("focus", (e) => {
				let $input = $(e.target);
				$input.parent().addClass("is-focus");
			})
			.on("blur change", (e) => {
				let $input = $(e.target);

				if ($input.val() == "") $input.parent().removeClass("is-focus");
			});
		
		/* placeholder*/       
		$('input, textarea').each(function(){
			var placeholder = $(this).attr('placeholder');
			$(this).focus(function(){ $(this).attr('placeholder', '');});
			$(this).focusout(function(){             
				$(this).attr('placeholder', placeholder);           
			});
		});
		/* placeholder*/
		
		$('.js-file').change(function(){
			
			let fileName = $(this).val().split('\\');
			
			$(this).closest('.js-file-container').find('.js-file-name').text(fileName[fileName.length - 1]);
			
			console.log('add');
			
		});
		
	},

	init: () => {
		forms.mask();
		forms.validate();
		forms.events();
	},
};

export { forms };
