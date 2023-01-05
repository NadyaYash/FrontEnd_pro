// 1. Функция принимает чсиловое значение n. Найти сумму чисел от 1 до n. Вывести результат в консоль

// const myFunc = (n) => {
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }
// console.log(myFunc(3));

// const myFunc2 = (n) => {
//     let m = 1;
//     for(let i=1; i <= n; i++) {
//         m *= i;
//     }
//     return m
// }
// console.log(myFunc2(3));

// let people = ['Olga', 'Oleg', 'Sasha', 'Ivan'];
// const last = people.length - 1;
// console.log(last);

// let numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers[numbers.length - 1]);

// 3. Задана строка. Вывести в консоль последний элемент строки

// const str = 'Hello! How are you doing?';
// console.log(str[str.length - 1]);

// for(let i = 0; i < numbers.length; i++ ){
//     console.log(numbers[i]);
// }

// const nums = [33, 5, 2, 45, 73, 777, 63, 102];
// // for (let i = 0; i < nums.length; i++ ){
// //     if(i % 2 === 0) {
// //         console.log(nums[i]);
// //     }
// // }

// // 6. Вывести в консоль все числа, заканчивающиеся на 3
// // for (let i = 0; i < nums.length; i++ ){
// //     if(nums[i] % 10 === 3) {
// //         console.log(nums[i]);
// //     }
// // }
// // for (let i = 0; i < nums.length; i++ ){
// //     if(nums[i] > 50) {
// //         console.log(nums[i]);
// //     }
// // }

// for (let i = 0; i < nums.length; i++ ){
    
//     console.log(nums[i] % 10);
// }

// 9. Дан массив из строк. Вывести только слова, длиннее 10 символов

let arr = ['hello', 'bye', 'good morning', 'good evening', 'good night'];
for(let i = 0; i < arr.length; i++) {
    if(arr[i].length > 10) {
        console.log(arr[i]);
    }
}




