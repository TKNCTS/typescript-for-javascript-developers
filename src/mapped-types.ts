export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
type PropertyTypes = keyof Profile;

//mapped Types・・・ある型のプロパティを一つ一つとってそのプロパティの型をカスタムするもの
type Optional<T> = { [P in keyof T]?: T[P] | null };
type OptionalPrfile = Optional<Profile>;
