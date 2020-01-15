// Задание 1
//1. Замыкания
//Напишите функцию sum, которая возвращает сумму чисел следующим образом:
//console.log(sum(5)(2)); // 7
const sum = (a) => (b) => (a + b);

console.log(sum(5)(2));

// Задание 2
//2. Покрасить абзацы по клику (событие click)
// Даны 3 абзаца:
// <p id="text1">Text 1</p>
// <p id="text2">Text 2</p>
// <p id="text3">Text 3</p>
// Дан массив цветов:
// const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
// По первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее;
// Все абзацы работают независимо.
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const changeColor = element => {
    for (let i = 0; i <= colors.length;) {
        return function () {
            element.style.color = colors[i];
            i++;
            if(i > colors.length){
                i = 0;
            }
        }
    }
};

text1.onclick = changeColor(text1);
text2.onclick = changeColor(text2);
text3.onclick = changeColor(text3);