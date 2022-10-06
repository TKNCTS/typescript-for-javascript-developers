export {};

//要件
// *owner
// *所有者
// *初期化時に設定できる
// *途中で変更できない
// *参照できる
// *secretNumber
//*個人番号
//*初期化時に設定できる
//*途中で変更できる
//*参照できない
class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, _secretNumber: number) {
    this._owner = owner;
    this._secretNumber = _secretNumber;
  }
  get owner() {
    return this._owner;
  }
  set secretNumber(_secretNumber: number) {
    this._secretNumber = _secretNumber;
  }
  debugPrint() {
    return `secretNumber:${this._secretNumber}`;
  }
}

let card = new MyNumberCard("はむさん", 1234567890);
// card.owner = "Ham";
console.log(card.owner);
console.log(card.debugPrint());
// card._secretNumber;
card.secretNumber = 1029384756;
console.log(card.debugPrint());
