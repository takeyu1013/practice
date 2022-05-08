const message: string = "Hello, world!";

console.log(message);

type User = {
  id: number;
  name: string;
};

const func = (user: Readonly<User>) => {
  const { id, name } = user;
  console.log(id, name);
};

const user: User = {
  id: 1,
  name: "foo",
};

func(user);
