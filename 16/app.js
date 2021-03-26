function randomIntBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
  // 9.9999999 + 1 = 10.9999999 ~ .floor = 10;
}

console.log(randomIntBetween(1, 10));

// Выпадающий список - число - слово.
