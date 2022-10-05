export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimajinSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  // throwingSpeed:154,
  battingAverage: 0.367,
};

//大谷選手を登録したいときは以下のように新たな型を作る方法が最初に考えられる
// type TwoWayPlayer={
//   throwingSpeed: number;
//   battingAverage: number;
// }

//もっとスマートに行う方法がインターセクション型となる
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShohei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
