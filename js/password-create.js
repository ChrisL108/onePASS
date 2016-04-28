$(function() {

	var $genBtn = $("#generatePw");
	var $submitBtn = $('button[type=submit]');
	var $userPw = $("#userPw");
	var $service = $('#pwLabel');
	var $pwList = $('#password_list');
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


// _$_ EVENT HANDLERS

	// Generate Button
	$genBtn.on('click', function() {
		$userPw.val(Password.generateRandom());
	});
	// Confirm Button
	$submitBtn.on('click', function(event) {
		event.preventDefault();
		Password.addPassword($userPw.val(), $service.val());
		// Fade In Notification
		if ($service.val()) {
			$popIn.find('h1').html("You added a password for"+$service.val()+ "!");
		} else {
			$popIn.find('h1').html("You added a password!");
		}
		$popIn.fadeIn('slow').delay(1100).fadeOut('slow');
		// clear previous values
		$userPw.val("");
		$service.val("");

	});

	// Automatically hide notification box
	$popIn.hide();

});
