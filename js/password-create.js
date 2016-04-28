$(function() {


	Password = {
		extraSymbols : ["!", "?", "#", "$", "*"],
		
		generateRandom: function() { // generates a random password
			var randomSymbol = this.extraSymbols[Math.floor(Math.random() * this.extraSymbols.length)];
			var randomSymbol2 = this.extraSymbols[Math.floor(Math.random() * this.extraSymbols.length)];
			var randomPassword = Math.random().toString(36).slice(-8) + randomSymbol + 
				   				 Math.random().toString(36).slice(-4).toUpperCase() +
				   				 randomSymbol2 ;
			return randomPassword;
		},

		create: function(service, password) {
			var date = new Date();
			// if no password is provided, generate one
			if (!password) password = this.generateRandom();

			return "Password for "+service+
					" is '"+password+"'\n"+
					"Generated on "+date;
		}
	};

	console.log(Password.create("Twitter"));

});
