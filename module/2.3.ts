{
  /* --Generic Type-- */
  type GenericArray<T> = Array<T>;

  //   const rollNumber1: number[] = [34, 5, 6];
  const rollNumber2: GenericArray<number> = [34, 5, 6];
  //   const mentors1: string[] = ["Asratul", "Nizam", "Sumon"];
  const mentors2: GenericArray<string> = ["Asratul", "Nizam", "Sumon"];
  //   const boolArray1: boolean[] = [true, false, true];
  const boolArray2: GenericArray<boolean> = [true, false, true];
  const add = (x: number, y: number) => x + y;
  add(34, 56);
  const users: GenericArray<{ name: string; age: number }> = [
    {
      name: "Asratul",
      age: 17,
    },
    {
      name: "Jhankar Mahbub",
      age: 45,
    },
    {
      name: "Nizam Uddin",
      age: 34,
    },
  ];
  type GenericTuple<X, Y> = [X, Y];
  const man: GenericTuple<string, string> = ["Mr. Nahid", "Ms. ?"];
  const userWithId: GenericTuple<number, { name: string; email: string }> = [
    45,
    { name: "Asratul", email: "mdnahid.dvl@gmail.com" },
  ];
}
