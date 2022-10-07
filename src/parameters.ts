export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("Ham", 43);
//Parametersは引数の型をタプル型で抽出することができる
type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["Gloria", 76];
