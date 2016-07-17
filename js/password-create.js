$(function() {

	var $pwList = $('#password_list'),  // List of user's passwords
		$userPw = $("#userPw"), // Input box for passwords
		$service = $('#pwLabel'), // Input box for "for" service
		$popIn = $('#pop-in'), // Fade in - shows added password
		$editPassBox = $('#editPass'), // Fade in - shows 'edit pw' box
		$elemToEdit, $localStorageItem, // Need variables for dynamically added passwords
		$dummyPw = $(".dummy-pw");

		$dummyPw.hide();
		$popIn.hide();
		$editPassBox.hide();

		//  Character sets for password generation
		symbols = "![]{}()%&*$#^<>~@|",
		letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
		numbers = "0123456789";

		var service, pw;

	var Password = {
		// if ( passwords in localstorage ):
		//      { add passwords to list }
		// else { show dummy passwords }
		init: function() {
			if (localStorage.length !== 0) {
				for (var i = 0; i < localStorage.length; i++) {
					service = localStorage.key(i);
					pw = localStorage.getItem(localStorage.key(i));
					this.addPassword(pw, service);
				}
			} else {
				$dummyPw.show();
			}
		},
		// gets random character from string
		_getRandChar : function(elems) {
			return elems[Math.floor(Math.random() * elems.length)];
		},
		// generates a random password
		generateRandom: function() { 

			var password = [];
			for (var i = 0, len = 16 ; i < len ; i++) {
				if (password.length < (len - 6)){
					password += this._getRandChar(letters);
				} else if (password.length < (len - 3)) {
					password += this._getRandChar(numbers);
				} else {
					password += this._getRandChar(symbols);
				}
			}
			return password;
		},
		// add password to list
		addPassword: function(pw, service) {
			var listItem =  '<li class="list_item"><span class="list-pw">' + pw + 
							'</span>  <small>' + service + '</small>' + 
							'<span class="glyphicon glyphicon-remove text-danger"></span>' + 
							' <span class="glyphicon glyphicon-pencil text-primary"></span></li>';
			$pwList.append(listItem);
			// set in localstorage
			localStorage.setItem(service, pw);
		}
	}; // end Password()

Password.init();

// ~~~~~ EVENT HANDLERS ~~~~~

	// Generate Password
	$("#generatePw").on('click', function() {
		$userPw.val(Password.generateRandom());
	});

	// (SUBMIT) new-password Button
	$('button#newPassSubmit').on('click', function(e) {
		e.preventDefault();
		Password.addPassword($userPw.val(), $service.val());
		console.log("test");
		// Pop-In notification
		if ($service.val()) {
			$popIn.find('h1').html("Password Added for "+$service.val()+ "!");
		} else {
			$popIn.find('h1').html("Password Added!");
		}
		// fade in notification
		$popIn.stop(true).fadeIn('slow').delay(1000).fadeOut('slow');
		// clear inputs & focus top input
		$userPw.val("").focus();
		$service.val("");
	});

	// (DELETE) buttons
	$('body').on('click', '.glyphicon-remove', function() {
		var $item = $(this).closest('li');
		$item.fadeOut('fast', function() {$item.remove();});

		var itemKey = $item.find('small').text();
		// remove from localstorage
		localStorage.removeItem(itemKey);
	});

	// (EDIT) buttons
	$('body').on('click', '.glyphicon-pencil', function() {
		$editPassBox.fadeToggle();
		$elemToEdit = $(this).closest('li');
		// get item to use w/ localstorage
		$localStorageItem = $elemToEdit.find('small').text();
	});

	// (EDIT - SUBMIT) pop-in box
	$('#editPassSubmit').on('click', function(e) {
		e.preventDefault();
		var $inputTxt = $('#editPassText');
		$elemToEdit.children('.list-pw').html($inputTxt.val());
		$editPassBox.delay(100).fadeOut('slow');
		// set new password in localstorage
		localStorage.setItem( $localStorageItem, $inputTxt.val() );
		// clear input box
		$inputTxt.val("");
	});

	// Clear Passwords / Storage
	$("#clearStorage").on('click', function(e) {
		e.preventDefault();
		$(".list_item").remove();
		localStorage.clear();
	});
	


});  // end ready()


