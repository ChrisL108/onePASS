$(function() {


	Password = {

		callDim : function() {
			var width = window.innerWidth;
			var height = window.innerHeight;
			console.log("Height:" + this.height + "Width" + this.width);
		},
		generate: function(pw, serv) {
			// var randomPassword = Math.random().toString(36).slice(-8) + 
			// 	   				 Math.random().toString(36).slice(-8).toUpperCase();
			return pw + serv;
		},
		create: function(password, service) {
			console.log(this.generate(password, service));
		},
	};



	$("body").on("click", function() {
		Password.callDim();
	});
	

});
