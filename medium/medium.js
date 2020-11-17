// MEDIUM: Write a function that would allow you to do this:
// var sharePizza = cutPizzaSlices(8);
// console.log(sharePizza(2));
//   // prints "Each person gets 4.00 slices of pizza"
// console.log(sharePizza(3));
//   // prints "Each person gets 2.67 slices of pizza"

function cutPizzaSlices(pieces, people) {
  const slicesPerPerson = pieces / people;
  return `Each person gets ${slicesPerPerson} slices of pizza`;
}

console.log(cutPizzaSlices(8, 2));

// ^^^ Mentor told me this way was cleaner and faster
