{
  /* --conditional types-- */
  type a1 = number;
  type b1 = string;
  type x = a1 extends null ? true : false; // conditional types
  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;
  type JubayerSheikh = {
    bike: string;
    car: string;
    ship: string;
  };
  type CheckVehicle<T> = T extends keyof JubayerSheikh ? true : false;
  type HasShip = CheckVehicle<"car">;
}
