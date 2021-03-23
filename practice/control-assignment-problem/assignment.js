let randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// for ( ; randomNumber < 0.7;) {
//   randomNumber = Math.random();
//   console.log(randomNumber);
// }

// do {
//   randomNumber = Math.random();
//   console.log(randomNumber);
// } while (randomNumber < 0.7);

const anArray = [1, 2, 3, 4];

// for (const i of anArray) {
//   console.log(i);
// }

for (let i = anArray.length - 1; i >= 0; i--) {
  console.log(anArray[i]);
}

if (randomNumber > 0.7 || randomNumber < 0.2) {
  alert(randomNumber);
}




