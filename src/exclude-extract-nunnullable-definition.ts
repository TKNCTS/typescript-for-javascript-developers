export {};

type MyExclude<T> = T extends string | number ? never : T;
type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//excludeを用いると特定の型を除外することができる
type FunctionType = Exclude<SomeTypes, string | number>;
type MyFunctionType = MyExclude<SomeTypes>;

//ExractはUnion型から特定の型を抽出する
type FuctionTypeByExtract = Extract<SomeTypes, DebugType>;

//NonnullableはUnion型からnullやundefined型を除いてくれる
type nullableTypes = string | number | null | undefined;
type NonnullableTypes = NonNullable<nullableTypes>;
