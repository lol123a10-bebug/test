// const sayHello = (param = 'Default value') => {
//   console.log(param);
// };

// sayHello('Hi Ayyub');

const checkInput = (cb, ...strings) => {
  // if (strings.length === 0 || strings[0] === '') {
  //   return console.log('Enter correct words')
  // }
  // console.log(strings)
  for (const string of strings) {
    if (!string) {
      cb();
      break;
    }
    console.log(string);
  }
};

// checkInput("Hi", "Bye", "Good");
checkInput(() => {
  console.log('Enter correct string')
}, 'CORRECT STRING MZFK');
