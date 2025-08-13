const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length - 1; i++) {
//   console.log(numbers[i]);
// }
//

numbers.forEach((number) => {
  console.log(number);
});

const transformedNumbers = numbers.map((number) => number * 2);

// Filter

const filteredNumbers = numbers.filter((number) => number % 2 == 0);

console.log(filteredNumbers);

class Person {
  constructor() {
    this.age = 24;
    console.log("initiated");
  }
}

const john = new Person();
console.log(john);
