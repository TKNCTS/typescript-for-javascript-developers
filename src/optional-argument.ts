export {};

//bmi(身長,体重,console.logで出力するかどうか)
let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  //printableがtrueのときのみ反応する
  if (printable) {
    console.log({ bmi });
  }
  return bmi;
};

bmi(1.64, 57, true);
bmi(1.64, 57, false);
bmi(1.64, 67);
