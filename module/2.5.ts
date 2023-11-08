{
  /* --Generic Function-- */
  const createArray = (param: string): string[] => {
    return [param];
  };
  const result1 = createArray("Bangladesh");
  console.log(result1);
  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  const result2 = createArrayWithGeneric<boolean>(true);
  console.log(result2);
  type MyDetails = {
    name: string;
    age: number;
    designation: string;
    job: string;
    country: string;
  };
  const myDetails = createArrayWithGeneric<MyDetails>({
    name: "Asratul Hasan",
    age: 17,
    designation: "Web developer",
    job: "Fiverr",
    country: "Bangladesh",
  });
  console.log(myDetails);

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };
  const tupleResult = createArrayWithTuple<string, number>("Bangladesh", 452);
  console.log(tupleResult);
  const tupleResult1 = createArrayWithTuple<
    string,
    { name: string; profession: string }
  >("Bangladesh", { name: "Asratul", profession: "Web Developer" });
  console.log(tupleResult1);
  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };
  interface Student {
    name: string;
    email: string;
    devType: string;
  }
  const student1 = addCourseToStudent<Student>({
    name: "Asratul Hasan Nahid",
    email: "mdnahid.phero@gmail.com",
    devType: "Fronend Developer",
  });
  console.log(student1);
  const student2 = addCourseToStudent<Student>({
    name: "Nizam Uddin",
    email: "nizam.kau@gmail.com",
    devType: "Fullstack Developer",
  });
  console.log(student2);
}
