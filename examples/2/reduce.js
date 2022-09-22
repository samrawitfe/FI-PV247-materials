// let array = [36, 25, 6, 15];

// const sum = array.reduce(
//   (prevValue, currentValue) => prevValue + currentValue,
//   0
// );

// console.log(sum);

// const getMax = (a, b) => Math.max(a, b);

// // callback is invoked for each element in the array starting at index 0
// console.log([1, 100].reduce(getMax, 50));
// console.log([50].reduce(getMax, 10));

// // callback is invoked once for element at index 1
// console.log([1, 100].reduce(getMax));

// // callback is not invoked
// console.log([50].reduce(getMax));
// console.log([].reduce(getMax, 1));

// [].reduce(getMax); // TypeError

// array = [15, 16, 17, 18, 19];

// const reducer = (previousValue, currentValue, index) => {
//   const returns = previousValue + currentValue;
//   console.log(
//     `previousValue: ${previousValue}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`
//   );
//   return returns;
// };

// array.reduce(reducer, 10);

const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  return {
    ...allNames,
    [name]: currCount + 1,
  };
}, {});

console.log(countedNames);

const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

const groupBy = (objectArray, property) => {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
};

const groupedPeople = groupBy(people, "age");
console.log(groupedPeople);
