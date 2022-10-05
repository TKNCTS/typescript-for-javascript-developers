export {};

//シグネチャー：これからこの関数を使うことの宣言
//ここでnumber型とstring型のデータの場合は受け付けられ、それ以外の型のデータははじかれるようになっている
function double(value: number): number;
function double(value: string): string;

//シグネチャーによりここでanyにしても問題なし、型安全も満たしている
function double(value: any): any {
  console.log(typeof value);
  if (typeof value === "number") {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double("Go "));
// console.log(double(true));
