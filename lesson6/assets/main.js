// Задание 1*************************************************************************************************************
/* Покрасить абзацы по клику
Даны 3 абзаца:
    <p id="text1">Text 1</p>
<p id="text2">Text 2</p>
<p id="text3">Text 3</p>
Даны цвета:
    const colors = {
        data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
        [Symbol.iterator]() {
            // ваш код
        }
    }
По первому нажатию на абзац он должен покраситься в первый цвет из массива, по второму нажатию - во второй и так далее;
Все абзацы работают независимо;
Необходимо использовать итераторы (Symbol.iterator) и идентификаторы (Symbol()) для идентификации счетчика;
Подсказка! Перебор colors должен должен быть бесконечным. Для вызова используйте next(). Т.е. ваш listener должен иметь примерно такой вид:
    const changeStyle = id => event => {
        event.target.style.color = colors.next(id).value;
    };*/
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    [Symbol.iterator]() {
        return this;
    },
    next(id) {
        if (this[id] === undefined) {
            this[id] = 0
        }
        if (this[id] < this.data.length) {
            return {
                done: false,
                value: this.data[this[id]++]
            }
        } else {
            this[id] = 0;
            {
                return {
                    done: true
                }
            }
        }
    }
};

const changeStyle = id => event => {
    event.target.style.color = colors.next(id).value;
};
text1.addEventListener('click', changeStyle(Symbol()));
text2.addEventListener('click', changeStyle(Symbol()));
text3.addEventListener('click', changeStyle(Symbol()));

// Задание 2**********************************************************************************************
//дан массив:
    //const data = [4, 56, 33, 42, 15]
//создать функцию bubbleSort, которая отсортирует массив способом Пузырёк

const data = [4, 56, 33, 42, 15];
const bubbleSort = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};
console.log(bubbleSort(data));

