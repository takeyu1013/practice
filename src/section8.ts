import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

export const section8 = async () => {
  const filePath = fileURLToPath(import.meta.url);
  const fileDir = path.dirname(filePath);
  const dataFile = path.join(fileDir, "../uhyo.txt");
  const data = await Promise.race([
    readFile(dataFile, { encoding: "utf8" }),
    (async () => {
      await (() => {
        return new Promise<void>((resolve) => {
          setTimeout(resolve, 1);
        });
      })();
      throw new Error("Timeout!");
    })(),
  ]).catch(() => {
    return "";
  });
  const count = data.split("uhyo").length - 1;
  console.log(count);
};
