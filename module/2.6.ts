{
  /* --Constraints-- */
  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 545,
    name: "Nahid Hasan",
    email: "mdnahid.fvr@gmail.com",
    married: false,
  });
  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 3445,
    name: "Asratul Hasan Nahid",
    email: "mdnahid.phero@gmail.com",
    devType: "Fronend Developer",
  });
  console.log(student1);
  const student2 = addCourseToStudent({
    id: 3443,
    name: "Nizam Uddin",
    email: "nizam.kau@gmail.com",
    hasWatch: "Apple Watch",
  });
  console.log(student2);
}
