const section4 = () => {
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
};
