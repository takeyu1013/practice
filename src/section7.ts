import { readFileSync } from "fs";

export const section7 = () => {
  const data = readFileSync("uhyo.txt", "utf-8");
  let count = 0;
  let currentIndex = 0;
  while (true) {
    const nextIndex = data.indexOf("uhyo", currentIndex);
    if (nextIndex >= 0) {
      ++count;
      currentIndex = nextIndex + 1;
    } else {
      break;
    }
  }
  console.log(count);
};
