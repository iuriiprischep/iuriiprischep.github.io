// HW 3-4
'use strict';
(function() {

var x = 0;
var y = 0;
var parentLi;

var homeWork = {

	addTitle: function(titleText, titleClass) {
		var title = document.createElement('h3');
		title.innerHTML = titleText;
		title.className = titleClass;
		document.body.appendChild(title);
	},

	addUl: function(ulClass, parent) {
		var ul = document.createElement('ul');
		ul.classList.add(ulClass);
		ul.setAttribute('id', 'ul' + x);
		parent.appendChild(ul);
	},

	addLi: function(liClass, liText, parent) {
		var li = document.createElement('li');
		li.classList.add(liClass);
		li.setAttribute('id', 'li' + x + "" + y);
		li.innerHTML = liText;
		parent.appendChild(li);
	},

	addInput: function(inputClass, parent) {
		var input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('id', x + "" + y);
		input.classList.add(inputClass);
		parent.appendChild(input);
	},

	addLabel: function(labelClass, parent) {
		var label = document.createElement('label');
		label.classList.add(labelClass);
		label.setAttribute('for', x + "" + y);
		label.innerHTML = 'Вариант ответа №' + y;
		parent.appendChild(label);
	},

	addButton: function(buttonClass) {
		var button = document.createElement('button');
		button.classList.add(buttonClass);
		button.innerHTML = 'Проверить мои результаты';
		document.body.appendChild(button);
	}
};


function mainFunction() {
	homeWork.addTitle('Тест по программированию', 'titleClass');

	homeWork.addUl('ulClassQuest', document.body);

	addQuestion();

	homeWork.addButton('buttonClass');
};

function addQuestion() {
	for (x = 1; x < 4; x++) {
		var textQuest = x + '.' + 'Вопрос №' + x;
		var parentLi = document.querySelector('.ulClassQuest');
		homeWork.addLi('liClassQuest', textQuest, parentLi);	
		var parentUl = document.getElementById('li' + x + "" + y);
		homeWork.addUl('ulClassAnswer', parentUl);	
		parentLi = document.getElementById('ul' + x);
		addAnswer (3, parentLi);
	};
};

function addAnswer (b, c) {
	for (y = 1; y < (b + 1); y++) {
		homeWork.addLi('liClassAnswer', " ", c);
		var parentInput = document.getElementById('li' + x + y);
		homeWork.addInput('inputClass', parentInput);
		homeWork.addLabel('labelClass', parentInput);
		};
};

mainFunction();

})();