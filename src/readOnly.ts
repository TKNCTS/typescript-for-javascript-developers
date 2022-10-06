export {};

//readonlyは見るためのもので変更させることはできない
class VisaCard {
  readonly owner: string;

  constructor(owner: string) {
    this.owner = owner;
  }
}

let myVisaCard = new VisaCard("はむさん");
console.log(myVisaCard.owner);
// myVisaCard.owner="ベーコン";
