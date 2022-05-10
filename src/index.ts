const message: string = "Hello, world!";

console.log(message);

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
