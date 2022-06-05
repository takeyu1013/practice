export const section6 = () => {
  type Some<T> = {
    tag: "some";
    value: T;
  };
  type None = {
    tag: "none";
  };
  type Option<T> = Some<T> | None;

  const isSome = <T>(obj: Option<T>): obj is Some<T> => {
    return obj.tag === "some";
  };

  const showNumbeIfExists = (obj: Option<number>) => {
    if (isSome(obj)) {
      console.log(obj.value);
    }
  };

  const four: Readonly<Option<number>> = { tag: "some", value: 4 };
  const nothing: Readonly<Option<number>> = { tag: "none" };

  showNumbeIfExists(four);
  showNumbeIfExists(nothing);

  const mapOption = <T, U>(
    obj: Option<T>,
    callback: (value: T) => U
  ): Option<U> => {
    switch (obj.tag) {
      case "some":
        return {
          tag: "some",
          value: callback(obj.value),
        };
      case "none":
        return {
          tag: "none",
        };
    }
  };

  const doubleOption = (obj: Option<number>) => {
    return mapOption(obj, (x) => x * 2);
  };
  console.log(doubleOption(four));
  console.log(doubleOption(nothing));
};
