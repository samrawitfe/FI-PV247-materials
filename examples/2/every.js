const numbers = [1, 2, 3, 42, 3, 2, 4, -1];
const allPassed = numbers.every((element) => element > 0);

console.log(allPassed);

const isEveryoneUnderage = (age) => age < 18;
const age = [2, 7, 12, 17, 21];

console.log(age.every(isEveryoneUnderage));

const isSubset = (array1, array2) =>
  array2.every((element) => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]));
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]));

// modifying

// let arr = [1, 2, 3, 4];
// arr.every((elem, index, arr) => {
//   arr[index + 1]--;
//   console.log(`[${arr}][${index}] -> ${elem}`);
//   return elem < 2;
// });

// appending

// arr = [1, 2, 3];
// arr.every((elem, index, arr) => {
//   arr.push("new");
//   console.log(`[${arr}][${index}] -> ${elem}`);
//   return elem < 4;
// });

// deleting

// arr = [1, 2, 3, 4];
// arr.every((elem, index, arr) => {
//   arr.pop();
//   console.log(`[${arr}][${index}] -> ${elem}`);
//   return elem < 4;
// });
