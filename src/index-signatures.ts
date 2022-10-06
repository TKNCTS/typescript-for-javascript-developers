export {};

//インデックスシグネチャーはオブジェクトに対して新たに色々な変数を定義するときに使うもの
interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "Ham", underTwenty: false };

profile.name = "Ham";
profile.age = 43;
profile.nationality = "Japan";
