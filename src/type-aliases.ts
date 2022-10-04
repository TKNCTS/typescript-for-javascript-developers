export {};

//既存の型に別名を付ける
type Mojiretsu = string; //別名の最初は大文字にする

const fooString: string = "Hello";
const fooMojiretsu: Mojiretsu = "Goodbye";
console.log({ fooMojiretsu });

const exmaple = {
  name: "Ham",
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const exmaple2: Profile = {
  name: "Ham",
  age: 43,
};

//typeofを用いるとexampleのプロパティの型を用いることができる
//exampleに連動している
type Profile2 = typeof exmaple;
console.log({ exmaple2 });
