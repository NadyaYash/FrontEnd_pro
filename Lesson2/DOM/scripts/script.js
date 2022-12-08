console.log("Hello")
const change = document.querySelector('.change');
const parag = document.querySelector('.parag');
change.addEventListener('click', () => {
    parag.style.backgroundColor = 'green';
});

// Создать кнопку и пустой div. При клике на кнопку в div создается параграф с содержанием 'good morning!'. Текст должен быть красного цвета, а размер шрифта - 20px


const creat = document.querySelector('.creat');

const block = document.querySelector('.block');
creat.addEventListener('click', () => {
    const par = document.createElement('p');
    
    block.append(par);
    par.innerText = 'Good morning';
    par.style.color = 'red';
    par.style.fontSize = '20px';


})


const par1 = document.querySelector('.par1');
const par2 = document.querySelector('.par2');
par1.addEventListener('click', () => {
    par2.style.fontSize = '24px';
})
par2.addEventListener('click', () => {
    par1.style.color = 'green';
    par1.style.backgroundColor = 'pink';
})

