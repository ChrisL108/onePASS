(function() {
	
	function PasswordMeter( element, meter ) {
		
		this.element = element;
		this.elementValue = this.element.value;
		this.elementValueLength = this.elementValue.length;
		this.meter = meter;
		this.meterWidth = this.meter.offsetWidth;
		this.meterBar = this.meter.querySelector( "#password-bar" );
		
		this.tokens = {
			letters: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
			numbers: "0123456789",
			specialChars: "!&%/()=?^*+][#><;:,._-|"	
		};
		
		this.letters = this.tokens.letters.split( "" );
		this.numbers = this.tokens.numbers.split( "" );
		this.specialChars = this.tokens.specialChars.split( "" );
		
				
		
		this.init();
		
	}
	
	PasswordMeter.prototype = {
		init: function() {
			this.check();
		},
		check: function() {
			var self = this;
			var val = self.elementValue;
			var total = self.elementValueLength;
			
			var totalLetters = 0;
			var totalNumbers = 0;
			var totalSpecialChars = 0;
			
			var tokens = val.split( "" );
			var len = tokens.length;
			var i;
			
			for( i = 0; i < len; ++i ) {
				var token = tokens[i];
				if( self._isLetter( token ) ) {
					totalLetters++;
				} else if( self._isNumber( token ) ) {
					totalNumbers++;
				} else if( self._isSpecialChar( token ) ) {
					totalSpecialChars++;
				}
				
			}
			
			
			var result = self._calculate( total, totalLetters, totalNumbers, totalSpecialChars );
			var perc = result * 10;
			var percStr = perc.toString();
			self.meterBar.style.width = percStr + "%";	
		},
		_isLetter: function( token ) {
			var self = this;
			if( self.letters.indexOf( token ) == -1 ) {
				return false;
			}
			return true;
		},
		_isNumber: function( token ) {
			var self = this;
			if( self.numbers.indexOf( token ) == -1 ) {
				return false;
			}
			return true;
		},
		_isSpecialChar: function( token ) {
			var self = this;
			if( self.specialChars.indexOf( token ) == -1 ) {
				return false;
			}
			return true;
		},
		_calculate: function( total, letters, numbers, chars ) {
			var level = 0;
			var l = parseInt( letters, 10 );
			var n = parseInt( numbers, 10 );
			var c = parseInt( chars, 10 );
			
			
			
			if( total < 16 ) {
				level += 1;
			}
			if( total >= 16 ) {
				level += 4;
			}
			
			if( l > 0 ) {
				level += 1;
			}
			
			if( n > 0 ) {
				level += 2;
			}
			
			if( c > 0 ) {
				level += 3;
			}
			
			return level;
		}
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		var form = document.querySelector( "#test" ),
			password = document.querySelector( "#pwd" ),
			meter = document.querySelector( "#password-level" );
			
			form.addEventListener( "submit", function( e ) {
				e.preventDefault();
				var pwdMeter = new PasswordMeter( password, meter );
			}, false);
		
	});
	
})();