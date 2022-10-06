export {};

class Person {
  constructor(public name: string, protected age: number) {
    //初期化処理になっている
  }
}

const me = new Person("はむさん", 43);
console.log(me);
