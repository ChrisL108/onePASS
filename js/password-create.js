$(function() {

	var $genBtn = $("#generatePw");

	var $userPw = $("#userPw");

	var Password = {
		
		// generates a random password
		generateRandom: function() { 
			symbols = "![]{}()%&*$#^<>~@|";
			letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			numbers = "0123456789";
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

		// gets random character from string
		_getRandChar : function(elems) {
			return elems[Math.floor(Math.random() * elems.length)];
		},
	};

	// Generate Button
	$genBtn.on('click', function() {
		$userPw.val(Password.generateRandom());
	});

});
