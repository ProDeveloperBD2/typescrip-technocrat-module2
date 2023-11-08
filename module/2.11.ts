{
  /* --Utillity Types-- */
  //   pick type
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };
  type NameAge = Pick<Person, "name" | "age">;
  //   omit type
  type contactInfo = Omit<Person, "name" | "age">;
  //   required type
  type PersonRequired = Required<Person>;
  //   partial type
  type PersonPartial = Partial<Person>;
  //   readonly type
  type PersonReadonly = Readonly<Person>;
  const person1: PersonReadonly = {
    name: "Asratul Hasan Nahid",
    age: 17,
    contactNo: "01775368894",
  };
  //  record type
  /*   type MyObj = {
    a: string;
    b: string;
  }; */
  type MyObj = Record<string, string>;
  const emtyObj: Record<string, unknown> = {};
  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };
}
