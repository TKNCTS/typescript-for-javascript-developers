export {};

class Me {
  static isProgrammer: boolean = true; //staticをつけると静的メンバーになる
  static firstName: string = "Tomoki";
  static lastName: string = "Konishi";

  static work() {
    //"Hey, guys!This is Tomoki! Are you interested in TypeScript? Let's dive into TypeScrpt!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScrpt!`;
  } //中身をfirstNameにしないこと
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
