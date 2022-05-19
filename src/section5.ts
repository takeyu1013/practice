export const section5 = () => {
  class User {
    readonly #name: string;
    readonly #age: number;

    constructor(name: string, age: number) {
      if (name === "") {
        throw new Error("名前は空にできません！");
      }
      this.#name = name;
      this.#age = age;
    }

    getMessage(message: string) {
      return `${this.#name} (${this.#age} 「${message}」)`;
    }
  }
  const createUser = (name: string, age: number) => {
    return (message: string) => {
      return `${name} (${age} 「${message}」)`;
    };
  };
  const uhyo = new User("uhyo", 26);
  console.log(uhyo.getMessage("こんにちは"));
  const getMessage = createUser("uhyo", 26);
  console.log(getMessage("こんにちは"));
};
