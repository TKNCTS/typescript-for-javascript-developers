export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
// let sumUnknown=numberUnknown+10;
//エラーが出る理由はnumberUnknownが数値ではないかもしれないと判断したから(unknown型)
//どうすればよいか
console.log(typeof numberUnknown); //わからない型を判断させる方法
if (typeof numberUnknown == "number") {
  let sumUnknown = numberUnknown + 10;
  console.log(sumUnknown);
}

console.log(numberAny);
console.log(sumAny);
