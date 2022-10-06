export {};

//namespaceとはフォルダーのようなもの。同じクラスがあっても別の名前空間に入れれば問題なし
namespace Japanese {
  //外の空間からアクセスできるようにまえにexportをつける
  export class Person {
    constructor(public name: string) {}
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middlename: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Person("はむさん");
const michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(me.name);
console.log(michael);
