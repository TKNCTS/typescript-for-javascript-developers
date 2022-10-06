export {};

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// type Profile2 = {
//   name?: string;
//   age?: number;
// };

//もとの変数が増えたり、減ったりするような動的な変化に対応できる

//Partialはすべてのプロパティを任意にしてくれる
type PartialType = Partial<Profile>;
//Requiredはすべてのプロパティを必須にしてくれる
type RequiredType = Required<Profile>;
