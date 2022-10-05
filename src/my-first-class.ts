export {};

class Person {
  //変数の設定
  name: string;
  age: number;

  //コンストラクター
  constructor(name: string, age: number) {
    //初期化処理
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name}, age:${this.age}`; //テンプレートリテラルは` `を使うので注意！
  }
}
let taro = new Person("Taro", 24);
console.log(taro);
console.log(taro.profile());
// let hanako = new Person();
