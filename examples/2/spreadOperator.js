// // Passing multiple arguments to function call
// const writeOutItems = (x, y, z) => {
//   console.log(x, y, z);
// };

// const args = [0, 1, 2];

// // OLD WAY
// console.log(".apply");
// writeOutItems.apply(null, args);

// console.log("spread operator ");
// writeOutItems(...args);

// console.log("spread operator ");
// writeOutItems(0, ...[1, 2]);

// const dateFields = [1970, 0, 1]; // 1 Jan 1970
// const d = new Date(...dateFields);

// console.log(d);

// const array1 = [1, 2, 3];
// const array2 = ["jožko", "ferko", "jurko"];

// const array3 = [...array1, ...array2];
// console.log(array3);

const obj1 = { foo: "bar", x: 1 };
const obj2 = { foo: "baz", y: 2 };

const clonedObj = { ...obj1 };
const notClonedObj = obj1;

obj1.foo = "kekw";

console.log(obj1);
console.log(clonedObj);
console.log(notClonedObj);
