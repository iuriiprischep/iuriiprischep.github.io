// Возведение в степень
'use strict';
(function () {
do {
var a = prompt ('Введите целое число, которое нужно возвести в степень');
} while (isNaN(a) || a!=Math.floor(a))

do {
var n = prompt ('Введите степень (целое число)');
} while (isNaN(n) || n!=Math.floor(n))

console.log('a=' + a);
console.log('n=' + n);

pow(a, n);

function pow(a, n) {
	var result = a;
	if (n==0 && a!==0) {
    	result = 1;
	} else if (a==0) {
    	result = 0;
	} else if (n>0) {
		for (var i = 1; i < n; i++){
    	  result = result*a;
    	}
	} else {
		result = 1;
		for (var i = 0; i < -n; i++){
    	  result /= a;
    	}
	}
    console.log('Результат ' + result );
	alert('Результат = ' + result);
};
})();