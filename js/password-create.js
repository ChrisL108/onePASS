$(function() {

	var $pwList = $('#password_list');
	var $userPw = $("#userPw");
	var $service = $('#pwLabel');
	
	var $popIn = $('#pop-in');
	var $editPassBox = $('#editPass');
	
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
		// editPassword: function(toEdit) {
		// 	toEdit.val("TESTING");
		// },

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
	$('button#newPassSubmit').on('click', function(event) {
		event.preventDefault();
		Password.addPassword($userPw.val(), $service.val());

		// set notification
		if ($service.val()) {
			$popIn.find('h1').html("Password Added for "+$service.val()+ "!");
		} else {
			$popIn.find('h1').html("Password Added!");
		}
		// fade in notification
		$popIn.fadeIn('slow').delay(1000).fadeOut('slow');
		// clear previous values
		$userPw.val("");
		$service.val("");
		
	});

	

	// Delete buttons
	$('body').on('click', '.glyphicon-remove', function() {
		this.closest('li').remove();
	});
	// Edit buttons
	$('body').on('click', '.glyphicon-pencil', function() {
		$editPassBox.fadeToggle();
		elemToEdit = this.closest('li');
		console.log(elemToEdit);
		
	});
	// Edit button submit
	$('button#newPassEdit').on('click', function(event) {
		event.preventDefault();
		// Password.editPassword(elemToEdit);
	});

	
	// Automatically hide notification box
	$popIn.hide();
	$editPassBox.hide();

});
