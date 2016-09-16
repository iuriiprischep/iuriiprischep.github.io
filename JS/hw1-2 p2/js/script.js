// Авторизация
var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = prompt ('Введите имя ' + (i+1) );
}

var userName = prompt('Введите имя пользователя');

console.log(arr);
console.log(userName);

if (userName == null) i = -1;

while (i > -1) {
	i = i - 1;
	if (arr[i] != userName) continue;
	alert(arr[i] + ' Вы успешно вошли');
	break;
}

if (i == -1) alert('Ошибка! Имя не найдено.');