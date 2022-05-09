const message: string = "Hello, world!";

console.log(message);

type User = Readonly<{
  id: number;
  name: string;
}>;

const func = ({ id, name }: User) => {
  console.log(id, name);
};

const user: User = {
  id: 1,
  name: "foo",
};

func(user);
