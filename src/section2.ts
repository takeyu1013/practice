const section2 = () => {
  const getFizzBuzzString = (number: number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      return "FizzBuzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else if (number % 5 === 0) {
      return "Buzz";
    }
    return `${number}`;
  };

  const sequence = (first: number, last: number) =>
    [...Array(last).keys()].map((number) => number + first);

  const result = sequence(1, 100).reduce(
    (previousResult, number, index) =>
      previousResult + (index > 0 ? " " : "") + getFizzBuzzString(number),
    ""
  );

  console.log(result);
};
