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

const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        {
          name: "Jorge",
          friends: [
            {
              name: "Dolle",
            },
          ],
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

function getFriends(person) {
  const friends = [];
  if (!person.friends) {
    return [];
  }
  for (const friend of person.friends) {
    friends.push(friend.name);
    friends.push(...getFriends(friend));
  }
  return friends;
}

console.log(getFriends(myself));
