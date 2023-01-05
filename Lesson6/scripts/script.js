// // 1. Дан массив чисел. Вывести в консоль все числа больше 50

// const numbers = [43, 1, -9, 132, 635, 52, 83];
// // for(let i = 0; i < numbers.length; i++){
// //     if(numbers[i] > 50) {
// //         console.log(numbers[i]);
// //     }
// // }

// // for(let i = 0; i < numbers.length; i++){
// //     if(numbers[i] < 0) {
// //         console.log(numbers[i]/2);
// //     }
// // }

// // 3. Вывести в консоль последний элемент массива
// console.log(numbers[numbers.length - 1]);

// // Методы массивов
// let nums = [1, 2, 3, 4, 5];
// nums.push(6, 7, 8); // добавили элемент в конец массива
// console.log(nums);
// nums.pop();
// console.log(nums);
// nums.pop();
// console.log(nums);// добавляет элемент в начало массива
// nums.unshift(0, 2, 4);
// console.log(nums);
// nums.shift(); // удаляет элемент из начала массива
// console.log(nums);

// const num = [40, -5, 7, 87, 153, -101, 77];
// const num2 = [];

// // for(let i = 0; i < num.length; i++) {
// //     if (num[i] < 0) {
// //         num2.push(num[i]);
// //     }
// // }
// console.log(num2);

// // for(let i = 0; i < num.length; i++) {
// //     if (num[i] % 2 === 0) {
// //         num2.push(num[i]);
// //     }
// // }

// // console.log(num2);

// // for(let i = 0; i < num.length; i++) {
    
// //         num2.push(Math.abs(num[i]%10));
    
// // }
// // 4. Сформировать массив, в котором числа больше 70 будут заменены на строку '>70', а числа меньше 70 будут заменены на строку '<70'

// // console.log(num2);

// // for(let i = 0; i < num.length; i++){
// //     if(num[i] > 70) {
// //         num2.push('>70');
// //     }
// //     else{
// //         num2.push('<70');
// //     }

// // }

// // console.log(num2);

// // for(let i = 0; i < num.length; i++) {
// //     num[i] > 70 ? num_5.push('>70') : num_5.push('<70')
// //   }
  
// // 5. Сформировать новый массив с элементами, чья длина больше или равна 5



const fruits = ['apple', 'banana', 'pineapple', 'orange', 'kiwi', 'Lemon', 'lime', 'Avocado'];
const new_arr = [];
// for(let i = 0; i < fruits.length; i++){
//     if(fruits[i].length >= 5) {
//         new_arr.push(fruits[i]);
//     }
// }

// for(let i = 0; i < fruits.length; i++){
//     if(fruits[i][0] === 'l' || fruits[i][0] === 'L') {
//         new_arr.push(fruits[i]);
//     }
// }
// console.log(new_arr);

// for(let i = 0; i < fruits.length; i++){
//     if(fruits[i][0].toLowerCase() === 'l') {
//         new_arr.push(fruits[i]);
//     }
// }
// console.log(new_arr);

// for(let i = 0; i < fruits.length; i++){
//     if(fruits[i][0].toLowerCase() === 'a') {
//         new_arr.push(fruits[i].toUpperCase());
//     }
// }
// console.log(new_arr);

const new_nums = [];
const nums_2 = [4, 9, 16];
for(let i = 0; i < nums_2.length; i++){
    new_nums.push(Math.sqrt(nums_2[i]));
}

console.log(new_nums);





// 7. Сформировать массив из строк, которые начинаются на букву 'l'. Регистр может быть любым




