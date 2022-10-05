export {};

//defaultparameterはsのパラメータが与えられなかった時に用いる
//置き方は変数定義のところでおく
const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));
console.log(nextYearSalary(2000));
