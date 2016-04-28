$(function() {

	var $pwList = $('#password_list');
	var $userPw = $("#userPw");
	var $service = $('#pwLabel');
	
	var $popIn = $('#pop-in');
	
	var Password = {
		// generates a random password
		generateRandom: function() { 
			var symbols = "![]{}()%&*$#^<>~@|";
			var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			var numbers = "0123456789";

			var password = [];
			for (var i = 0, len = 16 ; i < len ; i++) {
				if (password.length < (len - 6)){
					password += this._getRandChar(letters);
				}else if (password.length < (len - 3)) {
					password += this._getRandChar(numbers);
				} else {
					password += this._getRandChar(symbols);
				}
			}
			return password;
		},
		// add password to list
		addPassword: function(pw, service) {
			var listItem = '<li class="list_item">' + pw + 
				'  <small>' + service + '</small>' + 
				'<span class="glyphicon glyphicon-remove text-danger"></span></li>';
			$pwList.append(listItem);
		},

		// gets random character from string
		_getRandChar : function(elems) {
			return elems[Math.floor(Math.random() * elems.length)];
		}
	};


// ~~~~~ EVENT HANDLERS ~~~~~

	// Generate Button
	$("#generatePw").on('click', function() {
		$userPw.val(Password.generateRandom());
	});
	// Confirm Button
	$('button[type=submit]').on('click', function(event) {
		event.preventDefault();
		Password.addPassword($userPw.val(), $service.val());
		// clear previous values
		$userPw.val("");
		$service.val("");

		// set notification
		if ($service.val()) {
			$popIn.find('h1').html("Password Added for "+$service.val()+ "!");
		} else {
			$popIn.find('h1').html("Password Added!");
		}
		// fade in notification
		$popIn.fadeIn('slow').delay(1100).fadeOut('slow');
	});
	// Delete glyphicon
	$('body').on('click', '.glyphicon-remove', function() {
		this.closest('li').remove();
	});

	// Automatically hide notification box
	$popIn.hide();

});
