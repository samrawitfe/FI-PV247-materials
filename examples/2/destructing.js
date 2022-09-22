// destructuring object & nested object & combine object into single object
let user = {
  name: "Mike",
  friend: ["John", "Paul", "Jimmy"],
  location: {
    region: "England",
    country: "United Kingdom",
  },
  aboutMe: {
    status: "Single",
    pet: "Dog",
  },
};

const {
  name,
  friend,
  location,
  aboutMe: { status, pet },
} = user;

console.log(name);
console.log(friend);
console.log(location);
console.log(status);
console.log(pet);

//Combining Obj
const newUser = {
  ...user,
  car: {
    make: "Buick",
    year: 2012,
  },
};

console.log(newUser);

const {
  friend: [a, c, ...b],
} = user;

console.log(a);
console.log(c)
console.log(b);
