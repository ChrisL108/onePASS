$(function() {

	var $genBtn = $("#generatePw");

	var $userPw = $("#userPw");

	Password = {
		
		// generates a random password
		generateRandom: function() { 
			symbols = "![]{}()%&*$#^<>~@|";
			letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
			numbers = "0123456789";
			var password = [];

			for (var i = 0, len = 16 ; i < len ; i++) {
				if (password.length < (len - 6)){
					password += this.getRandChar(letters);
				}else if (password.length < (len - 2)) {
					password += this.getRandChar(numbers);
				} else {
					password += this.getRandChar(symbols);
				}
			}
			return password;
		},

		// gets random character from string
		getRandChar : function(elems) {
			return elems[Math.floor(Math.random() * elems.length)];
		},
	};

	// Generate Button
	$genBtn.on('click', function() {
		$userPw.val(Password.generateRandom());
	});

});
