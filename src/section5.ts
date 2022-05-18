export const section5 = () => {
  class User {
    #name: string;
    #age: number;
    constructor(name: string, age: number) {
      this.#name = name;
      this.#age = age;
    }
    static createUser(name: string, age: number) {
      if (name === "") {
        throw new Error("名前は空にできません！");
      }
      return new User(name, age);
    }
    getMessage(message: string) {
      return `${this.#name} (${this.#age} 「${message}」)`;
    }
  }
  const uhyo = User.createUser("uhyo", 26);
  console.log(uhyo.getMessage("こんにちは"));
};
