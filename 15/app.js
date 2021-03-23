function factory(tax) {
  function cost(amount) {
    return amount * tax;
  }
  return cost;
}

const purchaseTax = factory(0.19);
const saleTax = factory(0.2);

console.log(purchaseTax(200));
console.log(purchaseTax(300));
console.log(saleTax(300));
console.log(saleTax(500));

// function powerOf(x, n) {
//   let result = 1;
//   for (i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

function powerOf(x, n) {
  // if (n === 1) {
  //   return x;
  // }
  // return x * powerOf(x, n - 1);
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 6)); // 1*2*2*2*2*2*2
