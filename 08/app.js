// // // // let numbers = [1, 2, 3];
// // // // console.log(numbers);

// // // // // numbers = new Array(5); // []

// // // // // console.log(numbers);

// // // // // numbers = Array.of(1, 2, 3);

// // // // const listItems = document.querySelectorAll("li");
// // // // console.log(listItems);

// // // // const arrayListItems = Array.from(listItems);

// // // // console.log(arrayListItems);

// // // // const hobbies = ["Cooking", "Sports"];
// // // // const personalData = [30, "Max", { moreDetails: [] }];

// // // // const hobbies = ["Sports", "Cooking"];
// // // // hobbies.push("Reading");
// // // // hobbies.unshift("Coding");
// // // // hobbies.pop();
// // // // hobbies.shift();
// // // // console.log(hobbies);

// // // // const removedElement = hobbies.splice(-2, 1);
// // // // console.log(hobbies);

// // // // const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// // // const personalData = [{ name: "Max" }, { name: "Manuel" }];

// // // const manuel = personalData.find((person, idx, persons) => {
// // //   return person.name === "Manuel";
// // // });

// // // manuel.name = "Anna";

// // // console.log(manuel, personalData);

// // // const maxIndex = personalData.findIndex((person) => person.name === 'Max');

// // // console.log(maxIndex);

// // // const prices = [10.99, 5.99, 3.99, 6.59];
// // // const tax = 0.19;
// // // const taxAdjustedPrices = [];

// // // // for (const price of prices) {
// // // //   taxAdjustedPrices.push(price * (1 + tax));
// // // // }

// // // prices.forEach((price, idx, prices) => {
// // //   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
// // //   taxAdjustedPrices.push(priceObj);
// // // });

// // // console.log(taxAdjustedPrices);

// // const prices = [10.99, 5.99, 3.99, 6.59];
// // const tax = 0.19;

// // const taxAdjustedPrices = prices.map((price, idx, prices) => {
// //   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
// //   return priceObj;
// // });

// // // console.log(prices, taxAdjustedPrices);

// // const sortedPrices = prices.sort((a, b) => {
// //   if (a > b) {
// //     return -1;
// //   } else if (a === b) {
// //     return 0;
// //   } else {
// //     return 1;
// //   }
// // });

// // // console.log(sortedPrices.reverse());
// // console.log(sortedPrices);

// // const filteredArray = prices.filter((price) => price > 6);

// // console.log(filteredArray);

// // // let sum = 0;

// // // prices.forEach((price) => (sum += price));

// // // console.log(sum);

// // const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// // console.log(sum);

// // const data = "new york;10.99;2000";

// // const transformedData = data.split(";");

// // // const trd = transformedData.map((data) => {
// // //   if (!isNaN(data)) {
// // //     return (data = +data);
// // //   } else {
// // //     return data;
// // //   }
// // // });

// // // console.log(trd);

// // const nameFragments = ["Max", "Schwarz"];
// // const name = nameFragments.join(" ");
// // console.log(name);

// // const copiedNameFragments = [...nameFragments];

// // console.log(copiedNameFragments);

// // console.log(Math.min(...prices));

// const nameData = ["Max", "Schwarz", "Mr", 30];
// // const firstName = nameData[0];
// // const lastName = nameData[1];

// const [firstName, lastName, ...otherInformation] = nameData;

// console.log(firstName, lastName, otherInformation);
