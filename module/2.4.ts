{
  /* --Generic Interface-- */
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }
  type AppleWatch = {
    brand: string;
    model: string;
    display: string;
  };
  const poorDeveloper: Developer<AppleWatch> = {
    name: "Asratul Hasan",
    computer: {
      brand: "Windows",
      model: "core i 5",
      releaseYear: 2015,
    },
    smartWatch: {
      brand: "Apple",
      model: "kw-5-35uwl",
      display: "OLED",
    },
  };
  interface OnePlusWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }
  interface YamahBike {
    model: string;
    engineCapacity: string;
  }
  const richDeveloper: Developer<OnePlusWatch, YamahBike> = {
    name: "Jhankar Mahbub",
    computer: {
      brand: "MAC",
      model: "mac-apple3-5up5-86luw",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "OnePlus",
      model: "plus-4-k3d55-43-d5k",
      heartTrack: true,
      sleepTrack: false,
    },
    bike: {
      model: "Yamah",
      engineCapacity: "100cc",
    },
  };
}
