{
  /* --Generic Constraints With Keyof Operator- */
  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };
  type Owner = "bike" | "car" | "ship"; //menually
  type Owner2 = keyof Vehicle;
  const persion1: Owner = "car";
  const persion2: Owner2 = "ship";
  const user = {
    name: "Mr. Asratul",
    age: 17,
    address: "Bangladesh,Lakshmipur,Kanchanpur",
  };
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };
  const result = getPropertyValue(user, "address");
  console.log(result);
}
