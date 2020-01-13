/* Задание №1
1. Слова палиндромы
Слово палиндром - может читаться справа-налево и слева-направо одинаково. Прим "шалаш".

Узнать является ли строка палиндромом.
 */

let checkPalindrome = str => str === (str.split('').reverse().join('').toLowerCase());

/* Задание №2
1. Функция min(a, b) и Функция max(a,b)
Напишите функцию min(a,b), которая возвращает меньшее из чисел;
Напишите функцию max(a,y), которая возвращает большее из чисел;
Попробуйте переписать функцию с оператором ?.
 */
const min = (a, b) => {
    if (a < b) {
        return a;
    } else {
        return b;
    }
};

const max = (a, y) => {
    if (a > y) {
        return a;
    } else {
        return y;
    }
};

// Вариант решения с оператором ?

const minArrow = (a, b) => (a < b) ? a : b;

const maxArrow = (a, y) => (a > y) ? a : y;

/* Задание №3
 Замена элементов массива
Создадим массив с десятью случайными элементами от 0 до 100;
Напишем инструкцию, которая будет заменять все 0 на строку 'zero';
Выводим полученный массив в консоль.
 */
const randomArray = new Array(10);

function three(from, to, emptyArray) {
    for (i = 0; i < emptyArray.length; i++)
    {
        emptyArray[i] = Math.floor((Math.random() * (to - from + 1)) + from );
    }
    document.write(emptyArray);
}

three(0, 100, randomArray);
console.log(randomArray);






