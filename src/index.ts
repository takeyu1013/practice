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

type User = Readonly<{
  name: string;
  age: number;
  premiumUser: boolean;
}>;

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const func = ({ name, age }: User) => {
  console.log(name, age);
};

const user: User = {
  name: "foo",
  age: 20,
  premiumUser: true,
};

func(user);

const users = data
  .split("\n")
  .filter((line) => line)
  .map((line): User => {
    const [name, ageString, premiumUserString] = line.split(",");
    const age = Number(ageString);
    const premiumUser = premiumUserString === "1";
    return { name, age, premiumUser };
  });

users.forEach((user) => {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age}) はプレミアムユーザーです。`);
  } else {
    console.log(
      `${user.name} (${user.age}) はプレミアムユーザーではありません。`
    );
  }
});

const map = <T, U>(array: T[], callback: (value: T) => U): U[] => {
  const result: U[] = [];
  for (const element of array) {
    result.push(callback(element));
  }
  return result;
};

const data2 = [1, 1, 2, 3, 5, 8, 13];

const result2 = map(data2, (x) => x * 10);
console.log(result2);
