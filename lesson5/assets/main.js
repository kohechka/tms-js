
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

const changeStyle = () => {
    let i = 0;

    return event => {
        console.log(event);
        event.target.style.color = colors[i];
        i++;

        if (i === colors.length) {
            i = 0;
        }
    };
};

text1.addEventListener('click', changeStyle());
text2.addEventListener('click', changeStyle());
text3.addEventListener('click', changeStyle());

// версия классная
