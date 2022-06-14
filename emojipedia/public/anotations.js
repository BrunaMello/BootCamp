// var numbers = [3, 56, 2, 48, 5];
//
// // Map - Create a new array by doing something with each item in an array
//
//
// const newNumbers = numbers.map(function (x) {
//     return x * 2;
// });
//
// //with forEach
//
// var newNumbers2 = []
// numbers.forEach(function (x) {
//     newNumbers2.push(x * 2);
// });
//
// console.log(newNumbers);
// console.log(newNumbers2);
//
// // Filter - Create a new array by keeping the items that return true
//
// const newNumbersFilter = numbers.filter(function (num) {
//     return num > 10;
// })
//
// console.log(newNumbersFilter);
//
// // Reduce - Accumulate a value by doing something to each item in a array
//
// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//     //console.log("Accumulator = " + accumulator);
//     //console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// });
//
// //console.log(newNumber);
//
// var newNumber = 0;
//
// numbers.forEach(function (num) {
//     newNumber += num
// });
//
// //Find - find the *first* item that matches from an array
//
// const numbersFind = numbers.find(function (num) {
//     return num > 10;
// });
//
// console.log(numbersFind);
//
// //FindIndex - find the index of the first item that matches
//
// const numberFindIndex = numbers.findIndex(function (num) {
//     return num > 10;
// });
//
// console.log(numberFindIndex);
//
