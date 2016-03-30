$(document).ready(function() {

	var $password = $('#userPw');
	var $pw_list = $('#password_list');
	var $list_items = $('.list_item');
	var $checkboxes = $("input[type='checkbox']");

	var $deleteBtn = $('#deleteBtn');
	var $hideBtn = $('#hideBtn');
	var $showBtn = $('#showBtn');
	var $heading = $('#headingL');
	var $insert = $('button#insert');
	var myForm = $('#myForm');
	var $generated = $('#randPass');

	checkEven();


// ~~~~~~~~~~~~~~ EVENT HANDLERS ~~~~~~~~~~~~~~

// form event handler - submit
	$('form').submit(function(evt) {
		evt.preventDefault();		
		$date = new Date();
		console.log($password.val() + 
			" was added to your 1PASS! __"+ $date +"__");
		$pw_list.append($('<li class="list_item"><input type="checkbox">'+
							$password.val()+'</li>'));
		$password.val(""); // Clear input
		checkEven();	
	}); 

// checkboxes event handler - change
	$($checkboxes).on('change',function() {
		if ($(this).is(':checked')) {
			$(this).closest('li').addClass('checked');
		}
	});

// event handler for 'delete' button
	$deleteBtn.click(function() {
		var $checkboxes = $("input[type='checkbox']");
		console.log("delete button clicked...");
	   	for (var i=0;i<$checkboxes.length;i++) {
			if ($($checkboxes[i]).is(':checked')) {
				$($checkboxes[i]).closest('li').remove();
			}		
		}
	});

// event handler for 'hide' button
	$hideBtn.click(function() {
		var $checkboxes = $("input[type='checkbox']");
		for (var i=0;i<$checkboxes.length;i++) {
			if ($($checkboxes[i]).is(':checked')) {
				$($checkboxes[i]).closest('li').addClass('checked').hide();
			}		
		}
	});

// event handler for 'show' button
	$showBtn.click(function() {
		$('.checked').show();
	});

	$insert.click(function() {
		$password.val($generated.val());
		console.log('test');
	});

	function checkEven() {
		$('li:even').addClass('listHighlight');
	}



}); //  END DOC-READY