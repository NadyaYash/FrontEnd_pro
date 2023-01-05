// // const getShortestLenght = (string1, string2) => string1.length < string2.length ? string1.length : string2.length ;
// // console.log(getShortestLenght('hello', 'bye'));

// // const getShortestLenght = (string1, string2) => Math.min(string1.length, string2.length) ;
// // console.log(getShortestLenght('hello', 'bye'));

// // 1. Функция принимает две строки и возвращает длину самой короткой строки. Выведите длину самой короткой строки в консоль.

// // const getLongestLenghtUpperCase = (string1, string2) => string1.length > string2.length ? string1.toUpperCase() : string2.toUpperCase() ;

// // console.log(getShortestLenghtUpperCase('hello', 'bye'));

// const getLongerUpp = (str1, str2, str3) => {
//     if (str1.length > str2.length && str1.length > str3.length ){
//         return str1.toUpperCase();
//     } else if (str2.length > str1.length && str3.length > str2.length)
//         {
//             return str2.toUpperCase();
//     }
//     else {
//         return str3.toUpperCase();
//     }
// }

// getLongerUpp('hello', 'bye', 'hihhbhbjhbjhb');


// const getLongestString3 = (string1, string2, string3) => { 
//     const string = string1.length > string2.length && string1.length > string3.length ? string1 : string2.length > string1.length && string2.length > string3.length ? string2 : string3;
//     return string.toUpperCase()
//   };

  // Циклы
// for(let i = 0; i <= 10; i++ ) {
//     console.log('Hello');
// }

// for(let k = 0; k <=10; k++) {
//     console.log(k);
// }
  
// for( let l = 55; l >= 45; l++ ) {
//     console.log(l)
// }

// for( let l = 55; l >= 45; l-- ) {
//     console.log(l)
// }

// for (let i = 100; i >= 46; i-=3) {
//     console.log(i);
// }

// https://prog-center.pro/frontend/6


// for (let i = 2; i < 16; i++) {
//     if (i%2 == 0) {
//         console.log(i);
//     }
// }

for (let i = 2; i < 16; i++) {
    if (i%2 == 1) {
        console.log(i);
    }
}