import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const section7 = () => {
  const filePath = fileURLToPath(import.meta.url);
  const fileDir = path.dirname(filePath);
  const dataFile = path.join(fileDir, "../uhyo.txt");
  const data = readFileSync(dataFile, "utf-8");
  const count = data.split("uhyo").length - 1;
  console.log(count);
};
