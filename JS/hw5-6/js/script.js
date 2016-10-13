// HW 5-6
'use strict';
(function timer() {

	var startClick = document.querySelector('.start');
	var clearClick = document.querySelector('.clear');
	var hour = document.querySelector('.hour');
	var minute = document.querySelector('.minute');
	var second = document.querySelector('.second');
	var millisecond = document.querySelector('.millisecond');
	var iStart = 'start';
	var iMillisecond = 0;
	var iSecond = 0;
	var iMinute = 0;
	var iHour = 0;
	var timerId;

	initTimer ();

	function initTimer() {
	startClick.addEventListener('click', buttonStart);
	clearClick.addEventListener('click', buttonClear);	
	}

	function buttonStart() {
		if (iStart == 'pause') {
			pushPause();
		} else {
			pushStart();
			timerId = setInterval(stopwatch, 10);
		}
	}

	function buttonClear() {
		startClick.innerHTML = 'START';
		startClick.style.backgroundColor = 'green';
		iStart = 'start';
		clearInterval(timerId);
		iMillisecond = 0;
		millisecond.innerHTML = '00';
		iSecond = 0;
		second.innerHTML = '00';
		iMinute = 0;
		minute.innerHTML = '00';
		iHour = 0;
		hour.innerHTML = '00';
	}

	function pushStart() {
		startClick.innerHTML = 'PAUSE';
		startClick.style.backgroundColor = 'yellow';
		iStart = 'pause';
	}

	function pushPause() {
		startClick.innerHTML = 'CONT..';
		startClick.style.backgroundColor = 'green';
		iStart = 'cont';
	}

	function stopwatch() {
		if (iStart != 'cont') {
			if (iMillisecond < 99) {
				iMillisecond++;
				millisecond.innerHTML = iMillisecond;
				return;
			} else {
				iMillisecond = 0;
				millisecond.innerHTML = '00';
			}

			if (iSecond < 59) {
				iSecond++;
				displayTwoDigitNumber(second, iSecond);
				return;
			} else {
				iSecond = 0;
				second.innerHTML = '00';
			}

			if (iMinute < 59) {
				iMinute++;
				displayTwoDigitNumber(minute, iMinute);
				return;
			} else {
				iMinute = 0;
				minute.innerHTML = '00';
			}

			if (iHour < 99) {
				iHour++;
				displayTwoDigitNumber(hour, iHour);
			} else {
				buttonClear();
			}
		}
	}

	function displayTwoDigitNumber(a, b) {
		if (b < 10) {
			a.innerHTML = '0' + b;			
		} else {
			a.innerHTML = b;
		}
	}
})();