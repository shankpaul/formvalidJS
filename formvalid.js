/* Script by: shan k paul
 * Profile : www.tagprof.com/shan
 * Version: 0.0.1
 * Latest version: https://github.com/shankpaul/formvalidJS
 */

(function ($) {
	$.fn.validate = function (options) {
		
		if(options=="validate")
		{
			return isValid();
		}
		var options = $.extend({
			errorClass: "error"
		}, options);
		
		return this.each(function() {
			var self = $(this)
			self.bind('keyup', onBoxKeyup);
			self.bind('blur', onBoxBlur);

			function onBoxKeyup (e) {
				if((self.val()).trim()=="")
					addValidate();
				else if(self.data('validate') == 'email')
				{
					var email = self.val();
					var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    			if(re.test(email))
    			{
    				removeValidate();
    			}
    			else
    				addValidate();
				}
				else
					removeValidate();
			}

			function onBoxBlur (e) {
				if((self.val()).trim()=="")
					addValidate();
				else if(self.data('validate') == 'email')
				{
					var email = self.val();
					var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    			if(re.test(email))
    			{
    				removeValidate();
    			}
    			else
    				addValidate("Invalid email");
				}
				else
					removeValidate();

			}

			function addValidate(error_message) {
				message = error_message || "This field is required"; 
				self.addClass(options.errorClass);
				self.attr('title',message);
				// setTimeout(function(){
				// 	$('.'+options.errorClass).removeClass(options.errorClass);
				// },8000)				
			}

			function removeValidate() {
				self.removeClass(options.errorClass);
				self.removeAttr('title');
			}

			
		});
		
		self.bind('keyup', onBoxKeyup);
		self.bind('blur', onBoxBlur);

		function isValid()
		{
			self = $(this);
			$('.validate').trigger('blur');
			if($(document).find('.error').length==0)
				return true;
			else
				return false;
		}
	};
})(jQuery);

