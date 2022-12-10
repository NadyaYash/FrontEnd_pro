// Создать кнопку, при клике на которую в консоль выводится сообщение 'Hello, world!'
const btn = document.createElement('button');
document.querySelector('body').append(btn);
btn.innerText = 'Click!';
btn.addEventListener('click', () => console.log('Hello world!'));

// Создать кнопку и пустой div. При клике на кнопку в div создается два параграфа (текст произвольный). Один параграф синего цвета и размером шрифта 20px. Второй - красного цвета, шрифт 24px
const btn_1 = document.createElement('button');
document.querySelector('body').append(btn_1);
btn_1.innerText = 'Click me!';

const block = document.createElement('div');
document.querySelector('body').append(block);

btn_1.addEventListener('click', () => {
const par_1 = document.createElement('p');
block.append(par_1);
par_1.innerText = 'Hello, everybody!';
par_1.style.color = 'blue';
par_1.style.fontSize = '20px';

const par_2 = document.createElement('p');
block.append(par_2);
par_2.innerText = 'Good bye, everybody!';
par_2.style.color = 'red';
par_2.style.fontSize = '24px';
}
);

// Написать функцию, которая принимает два числовых агрумента, а возвращает произведение (умножение) этих чисел. Вывести результат в консоль

const getMult = (num1, num2) => num1*num2;
console.log(getMult(4, 8)); 


// Написать функцию, которая принимает числовой аргумент, а возвращает это число в 3 степени. Выведите результат в консоль.

const getExpend = (number) => Math.pow(number, 3);
console.log(getExpend(5));
