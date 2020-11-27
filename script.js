'use strict';

let isNumber = function(n)  {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

let getRandom = function (min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    let n = 10;
    console.log(randomNumber);
    function guessNumber() {
        let userNumber = prompt('Угадай число от 1 до 100');
        if (n === 1) {
            if (confirm('Попытки закончились, хотите сыграть еще?'))
                getRandom(1, 100);
            else return;
        } else if (userNumber === null) {
            alert('Игра окончена');
        } else if (userNumber < 1 || userNumber > 100) {
            alert('Число должно быть в диапазоне от 1 до 100');
            return guessNumber();
        } else if (!isNumber(userNumber)) {
            alert('Введи число!');
            return guessNumber();
        } else if (userNumber > randomNumber) {
            alert('Загаданное число меньше, осталось попыток: ' + --n);
            return guessNumber();
        } else if (userNumber < randomNumber) {
            alert('Загаданное число больше, осталось попыток: ' + --n);
            return guessNumber();
        } else if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
                getRandom(1, 100);
        }
    }
    guessNumber();
};

getRandom(1, 100);