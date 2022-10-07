export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

//excludeを用いると特定の型を除外することができる
type FunctionType = Exclude<SomeTypes, string | number>;
type NunFunctionType = Exclude<SomeTypes, DebugType>;
//他に関数をのぞく方法
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

//ExractはUnion型から特定の型を抽出する
type FuctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFuctionTypeByExtract = Extract<SomeTypes, string | number>;

//NonnullableはUnion型からnullやundefined型を除いてくれる
type nullableTypes = string | number | null | undefined;
type NonnullableTypes = NonNullable<nullableTypes>;
