import { readFileSync } from "fs";

export const section7 = () => {
  const data = readFileSync("uhyo.txt", "utf-8");
  const count = data.split("uhyo").length - 1;
  console.log(count);
};
