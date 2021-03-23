const numbers = [1, 2, 3, 4, 5, 6, 7];

const filteredNumbers = numbers.filter((number) => {
  return number > 5;
});

console.log(filteredNumbers);

const mappedNumbers = numbers.map((number) => ({ number }));

console.log(mappedNumbers);

const reducedNumbers = filteredNumbers.reduce((prevNum, curNum) => {
  return prevNum * curNum;
}, 1);

console.log(reducedNumbers);

// const findMax = (...numbers) => {
//   let nums = [];
//   const filteredNumber = numbers.reduce((prevNum, curNum) => {
//     if (prevNum > curNum) {
//       return prevNum;
//     } else {
//       return curNum;
//     }
//   }, 0);
//   const filteredNumber2 = numbers.reduce((prevNum, curNum) => {
//     if (prevNum > curNum) {
//       return curNum;
//     } else {
//       return prevNum;
//     }
//   });
//   nums.push(filteredNumber);
//   nums.push(filteredNumber2);
//   let [max, min] = nums;
//   console.log(max, min);
// };

const findMax = (...numbers) => {
  let curMax = numbers[0];
  let curMin = numbers[0];
  for (const num of numbers) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
};

console.log(findMax(...numbers));

const [min, max] = findMax(...numbers);
console.log(min, max);

const list = [1, 3, 4, 5, 6, 6, 6];

const userIds = new Set();
userIds.add(10);
