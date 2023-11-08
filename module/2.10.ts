{
  /* --Mapped Types-- */
  const arrOfNumbers: number[] = [2, 66, 3, 3];
  const arrOfString: string[] = arrOfNumbers.map((number) => number.toString());
  console.log(arrOfString);
  type AreaNumber = {
    height: number;
    width: number;
  };
  type Height = AreaNumber["height"]; // lookup
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };
  const area1: AreaString<{ height: string; width: number }> = {
    height: "837488",
    width: 45,
  };
}
