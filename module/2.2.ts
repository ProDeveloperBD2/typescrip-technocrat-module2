{
  /* --Interface-- */
  type User1 = {
    name: string;
    age: number;
  };
  interface User2 {
    name: string;
    age: number;
  }
  type UserWithRole1 = User1 & { role: string };
  interface UserWithRole2 extends User2 {
    role: string;
  }
  const user1: UserWithRole2 = {
    name: "Asratul Hasan",
    age: 2,
    role: "Admin",
  };
  type RollNumber = number;
  type Roll1 = number[];
  const roll1: Roll1 = [7, 56, 76, 67];
  interface Roll2 {
    [index: number]: number;
  }
  const roll2: Roll2 = [343, 56, 6, 7];
  type Add1 = (num1: number, num2: number) => number;
  interface Add2 {
    (num1: number, num2: number): number;
  }
  const add1: Add1 = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;
}
