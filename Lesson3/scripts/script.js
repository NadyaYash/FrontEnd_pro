const getInfo = (name, age) => `Hello ${name} ! You are ${age} years old.`;

console.log(getInfo("Nadya", 35));

// 2. Создать функцию, которая принимает два числа и одну строку и возвращает строку в формате: 'Слово: <STRING>, сумма чисел: <NUM1 + NUM2>'

const getMessage = (world, num1, num2) => ` ${world} , сумма чисел: ${num1+num2}`;
console.log(getMessage('жизнь', 4, 8));

const getInf = (nam, ages) =>{
    if(ages >= 18){
        return `Hello, ${nam}!`}
        else{
            return `Hi, ${nam}!`
        }
    }

    console.log(getInf("Oleg", 15));
    console.log(getInf("Olga", 25));

    const getInf2 = (names, agg) => agg >= 18 ? `Hello, ${names}` : `Hi, ${names}`;
    console.log(getInf2("Oleg", 15));
    console.log(getInf2("Olga", 25));

    // 4. Напишите функцию, которая принимает два аргумента с числовым значением и возвращает большее значение. Выведите результат в консоль.
const getMax = (num_1, num_2) => num_1 > num_2 ? num_1 : num_2 > num_1 ? num_2 : "Numbers are equial";

console.log(getMax(14, 14));
console.log(getMax(14, 14));
console.log(getMax(14, 14));

let a = Math.max(1, 5, 7, 89, 0);
let b = Math.min(1, 5, 7, 89, 0);
let c = Math.abs(-1);
let d = Math.ceil(1,32);
let e = Math.round(1,32);
let f = Math.floor(1,32);
let g = Math.pow(5, 2);
let k = Math.sqrt(64);
let j = Math.random();
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(k);
console.log(j);

let random1 = Math.random();
console.log(random1);
let random2 = random1*10;
let random3 = Math.round(random2);
console.log(random3);

let random4 = Math.round(Math.random()*100);
console.log(random4);




