export {};

// let value = 1;
// value = "foo";
//このままだと型が異なるため、value変数にfooを入れることができない
//valueにいろいろな型を入力できるようにしたい→union型

let value: number | string = 1;
value = "foo";

//literal型
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
//13以降は入れないようにしたい
// month=13;
//union型は制約を広げるためのものでliteral型は制約を縮めるためのもの
