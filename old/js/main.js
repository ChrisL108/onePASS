$(document).ready(function() {

	var $password = $('#userPw');
	var $pw_list = $('#password_list');
	var $list_items = $('.list_item');
	var $checkboxes = $("input[type='checkbox']");

	var $deleteBtns = $('.glyphicon-remove');
	var $hideBtn = $('#hideBtn');
	var $showBtn = $('#showBtn');
	var $heading = $('#headingL');
	var $insert = $('button#insert');
	var myForm = $('#myForm');
	var $generated = $('#randPass');
	var $pwLabel = $('#pwLabel');

	checkEven();


// ~~~~~~~~~~~~~~ EVENT HANDLERS ~~~~~~~~~~~~~~

// SUBMIT
	$('form').submit(function(evt) {
		evt.preventDefault();		
		$date = new Date();
		console.log($password.val() + " was added to your 1PASS! __"+ $date +"__");
		if ($pwLabel.val()) {
			$pw_list.append($('<li class="list_item">'+
							$password.val()+ ' - <small>'+ $pwLabel.val() +
							'</small><span class="glyphicon glyphicon-remove text-danger"></span></li>'));
		} else {
			$pw_list.append($('<li class="list_item">'+
							$password.val()+'<span class="glyphicon glyphicon-remove text-danger"></span></li>'));
		}
		$password.val(""); // Clear input
		$pwLabel.val("");
		checkEven();	
	}); 

// DELETE
	$('body').on('click', '.glyphicon', function() {
		checkEven();
		
			$(this).closest('li').remove();
		
		

	});

// ROW HIGHLIGHT
	function checkEven() {
		$('li:even').addClass('listHighlight');
		$deleteBtns = $('.glyphicon-remove');
	}



}); //  ~~~~~~~~~~~END DOC-READY