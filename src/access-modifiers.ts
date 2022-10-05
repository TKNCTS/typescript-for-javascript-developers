export {};

class Person {
  //変数の設定
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  //コンストラクター
  constructor(name: string, age: number, nationality: string) {
    //初期化処理
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age:${this.age}`; //テンプレートリテラルは` `を使うので注意！
  }
}

class Andoroid extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }
  profile(): string {
    return `name: ${this.name}, age:${this.age},nationality:${this.nationality}`;
  }
}

let taro = new Person("Taro", 24, "Japan");
console.log(taro.name);
// console.log(taro.age);
console.log(taro.profile());
// let hanako = new Person();

//アクセス修飾子まとめると
//publicは制限がほぼなし・変数の前にアクセス修飾子を書かなくてもpublicとなる
//privateはクラスの外から使うことができないが、クラス内の関数を経由して使うことができる。
//protectedもクラスの外から使うことができないが、クラス内の関数を経由して使うことができる。
//privateとprotectedの違いはクラスを継承したときにprivateは継承したクラスで使うことができないが、protectedは使うことができる
