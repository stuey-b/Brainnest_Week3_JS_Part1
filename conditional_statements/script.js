const displayHighestNumber = (number1, number2) => {
  if (number1 > number2) {
    console.log(`${number1} is higher than ${number2}.`);
  } else if (number1 < number2) {
    console.log(`${number2} is higher than ${number1}.`);
  } else {
    console.log(`${number1} & ${number2} are equal.`);
  }
}

const oddOrEven = (number) => {
  if (number % 2 === 0) {
    console.log(`${number} is EVEN.`);
  } else {
    console.log(`${number} is ODD.`);
  }
}

displayHighestNumber(5, 3);
oddOrEven(7);