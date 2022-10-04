export {};

let profile: object = { name: "Ham" };
profile = { birthYear: 1998 };
console.log({ profile });
//上書きされてしまう

let profile1: {
  name: string;
} = { name: "Ham" };
// profile1 = { birthYear: 1998 };
// profile1 = { name: "Nimo" };
console.log({ profile1 });
//別の変数で上書きされなくなる
