const userCart = [
  { productId: 1, productPrice: 355 },
  { productId: 2, productPrice: 5355 },
  { productId: 3, productPrice: 34 },
  { productId: 4, productPrice: 3535 },
];

console.log(userCart.some((e) => e.productPrice > 10000));

const userCart_2 = [
  { productId: 1, productPrice: 355 },
  { productId: 2, productPrice: 5355 },
  { productId: 3, productPrice: 34 },
  { productId: 4, productPrice: 3535 },
  { productId: 4, productPrice: 15000 },
];

console.log(userCart_2.some((e) => e.productPrice > 10000));

const isBiggerThan10 = (element) => element > 10;

console.log([2, 5, 8, 1, 4].some(isBiggerThan10));
console.log([12, 5, 8, 1, 4].some(isBiggerThan10));
