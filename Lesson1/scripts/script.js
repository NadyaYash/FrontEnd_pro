// const text = document.querySelector('.text');
// const texts = document.querySelector('.texts');
// text.style.color = 'green';
// console.log(text);
// console.log(texts);
// const change = document.querySelector('.change_btn');
// change.addEventListener('click', myFunc);

// function myFunc(){
//     text.style.color = "red";
// }

// const par = document.querySelector('.par');
// const parag = document.querySelector('.parag');

// par.addEventListener('click', () => {
//     parag.style.backgroundColor = 'pink';
// });

// parag.addEventListener('click', () => {
//     par.style.color = 'green';
// })

// change.addEventListener('click', () => {
//     text.style.color = "red";
// });

// change.addEventListener('click', () => {
//     text.style.color = "red";
//     texts.style.fontSize = '30px';
// });

const add_par_btn = document.querySelector('.add_par_btn');
const par_container = document.querySelector('.par_container');

// add_par_btn.addEventListener('click', () => {
    const new_par = document.createElement('p');
    const new_parag = document.createElement('p');
    
//     par_container.append(new_par);
//     new_par.innerText = 'New paragraph';
// }
// )

// Создать кнопку и пустой div. При клике на кнопку будет создаваться два параграфа (первый зеленого цвета, второй - красного). Текст параграфов произвольный

add_par_btn.addEventListener('click', () => {
    const new_par = document.createElement('p');
    const new_parag = document.createElement('p');
    
    par_container.append(new_par);
    new_par.innerText = 'New paragraph';
    new_par.style.color = "green";

    par_container.append(new_parag);
    new_parag.innerText = 'New paragraph 2';
    new_parag.style.color = "red";


})