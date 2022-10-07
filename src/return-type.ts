export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));
//関数型の戻り値の型で構成される型を構築するもの
type ReturnTypeFromAdd = ReturnType<typeof add>;
