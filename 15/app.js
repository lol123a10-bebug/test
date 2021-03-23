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


