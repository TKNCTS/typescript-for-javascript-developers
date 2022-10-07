export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Ham",
  age: 43,
};

me.age++; //自身の年齢が＋１される、つまり44になる
console.log(me);

type PersonalDataType = Readonly<Profile>; //readonlyになる

const friend: PersonalDataType = {
  name: "Shigeru",
  age: 40,
};

// friend.age++; //readonly型のため編集することができない
