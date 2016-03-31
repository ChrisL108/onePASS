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
	var $pwLabel = $('#pwLabel');

	checkEven();


// ~~~~~~~~~~~~~~ EVENT HANDLERS ~~~~~~~~~~~~~~

// SUBMIT
	$('form').submit(function(evt) {
		evt.preventDefault();		
		$date = new Date();
		console.log($password.val() + " was added to your 1PASS! __"+ $date +"__");
		if ($pwLabel.val()) {
			$pw_list.append($('<li class="list_item"><input type="checkbox">'+
							$password.val()+ ' - <small>'+ $pwLabel.val() +'</small></li>'));
		} else {
			$pw_list.append($('<li class="list_item"><input type="checkbox">'+
							$password.val()+'</li>'));
		}
		$password.val(""); // Clear input
		$pwLabel.val("");
		checkEven();	
	}); 

// CHECKED?
	$($checkboxes).on('change',function() {
		if ($(this).is(':checked')) {
			$(this).closest('li').addClass('checked');
		}
	});

// DELETE
	$deleteBtn.click(function() {
		var $checkboxes = $("input[type='checkbox']");
		var count = 0;

	   	for (var i=0;i<$checkboxes.length;i++) {
			if ($($checkboxes[i]).is(':checked')) {
				$($checkboxes[i]).closest('li').remove();
				count++;
			}		
		}
		console.log("You deleted "+count+" items!");
	});

// HIDE
	$hideBtn.click(function() {
		var $checkboxes = $("input[type='checkbox']");
		for (var i=0;i<$checkboxes.length;i++) {
			if ($($checkboxes[i]).is(':checked')) {
				$($checkboxes[i]).closest('li').addClass('checked').hide();
			}		
		}
	});

// SHOW
	$showBtn.click(function() {
		$('.checked').show();
	});

// INSERT
	$insert.click(function() {
		$password.val($generated.val());
		$generated.val("");
		console.log('test');
	});
// ROW HIGHLIGHT
	function checkEven() {
		$('li:even').addClass('listHighlight');
	}



}); //  ~~~~~~~~~~~END DOC-READY