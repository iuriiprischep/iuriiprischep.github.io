// Возведение в степень
'use strict';
(function () {

	var a;
	var n;

	enterNumbers();

	involution();

	function enterNumbers() {
		do {
			a = prompt ('Введите целое число, которое нужно возвести в степень');
		} while (isNaN(a) || a != Math.floor(a))
	
		do {
			n = prompt ('Введите степень (целое число)');
		} while (isNaN(n) || n != Math.floor(n))
	
		console.log('a=' + a);
		console.log('n=' + n);
	};

	function involution() {
		var result = a;
		if (n == 0 && a !== 0) {
	    	result = 1;
		};

		if (a == 0) {
	    	result = 0;
		};

		if (n > 0) {
			for (var i = 1; i < n; i++){
	    	  result = result*a;
	    	}
		} else {
			result = 1;
			for (var i = 0; i < -n; i++){
	    	  result /= a;
	    	}
		};

	    console.log('Результат ' + result );
		alert('Результат = ' + result);
	};
})();