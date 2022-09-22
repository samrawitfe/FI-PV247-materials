// Optional chaining: (?.)

// The optional chaining operator (?.) enables you to
// read the value of a property located deep within a
// chain of connected objects without having to
// check that each reference in the chain is valid.

// The ?. operator is like the . chaining operator,
// except that instead of causing an error if a reference
// is nullish (null or undefined), the expression returns
// a value of undefined.

// When used with function calls,
// it returns undefined if the given function does not exist.

// Example:

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
  sayHi: () => console.log("sayHi"),
};

console.log(adventurer && adventurer.dog && adventurer.dog.name);

const dogName = adventurer.dog?.name;
console.log(dogName);
// output: undefined

console.log(adventurer.someNonExistentMethod?.());
// output: undefined

adventurer.sayHi?.();
