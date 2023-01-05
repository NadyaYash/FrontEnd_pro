// Дан массив чисел
const numbers = [45, 73, -200, 0, 544, 23, 74, 3, 2, -11, -43];
// 1. Сформируйте массив из отрицательных чисел
// const newArr = [];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] < 0){
//         newArr.push(numbers[i]);
//     }
// }
// console.log(newArr);

// 2. Сформируйте массив из положительных чисел, заканчивающихся на 3
// const newArr2 = [];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i]%10 == 3){
//         newArr2.push(numbers[i]);
//     }
// }
// console.log(newArr2);

// 3. Сформируйте массив положительных четных чисел

// const newArr3 = [];
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i]%2 === 0 && numbers[i] >= 0){
//         newArr3.push(numbers[i]);
//     }
// }
// console.log(newArr3);

// 4. Сформируйте массив из всех чисел, умноженных на 3
// const newArr3 = [];
// for(let i = 0; i < numbers.length; i++){
    
//         newArr3.push(numbers[i]*3);
//     }

// console.log(newArr3);
// 5. Вывести в консоль последний элемент массива
// console.log(numbers[numbers.length - 1]);
// 6. Сформируйте массив из последних цифр каждого элемента массива
// const newArr2 = [];
// for(let i = 0; i < numbers.length; i++){
    
//         newArr2.push(numbers[i]%10);
//     }
// console.log(newArr2);

// Дан массив строк
const products = ['bread', 'milk', 'butter', 'water', 'juice', 'apple', 'tomato', 'Beer'];
// 7. Сформировать массив из продуктов, длина которых равна 5
// const newArr3 = [];
// for(let i = 0; i < products.length; i++){
//     if(products[i].length === 5){
//         newArr3.push(products[i]);
//     }
// }
// console.log(newArr3);
// 8. Сформировать массив из строк, которые начинаются на букву 'b'. Регистр может быть любым. Строка должна быть приведена к верхнему регистру
// const newArr3 = [];
// for(let i = 0; i < products.length; i++){
//     if(products[i][0].toUpperCase() === 'B'){
//         newArr3.push(products[i]);
//     }
// }
// console.log(newArr3);

// 9. Сформировать массив из строк, которые заканчиваются на букву 'r'
// const newArr3 = [];
// for(let i = 0; i < products.length; i++){
//     if(products[i][products[i].length-1] === 'r'){
//         newArr3.push(products[i]);
//     }
// }
// console.log(newArr3);


// Дан массив с разными типами данных
const array = ['hello', 9, true, false, 5, 67, undefined, null, 0];
// 10. Сформировать массив из чисел
// const newArr3 = [];
// for(let i = 0; i < array.length; i++){
//     if(typeof(array[i]) === 'number'){
//         newArr3.push(array[i]);
//     }
// }
// console.log(newArr3);

// 11. Сформировать новый массив, в котором все булевые значения будут заменены на строку 'boolean', а числовые значения - на строку 'number'
const newArr3 = [];
for(let i = 0; i < array.length; i++){
    if(typeof(array[i]) === 'number'){
        newArr3.push(typeof(array[i]));
    }
    else if (typeof(array[i]) === 'boolean'){
        newArr3.push(typeof(array[i]));
    }
    else{
        newArr3.push(array[i]);
    }
}
console.log(newArr3);

