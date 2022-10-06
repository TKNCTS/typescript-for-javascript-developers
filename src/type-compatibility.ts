export {};

let fooCompatible: any;
let barCompatible: string = "TypeScript";

console.log(typeof fooCompatible);

fooCompatible = barCompatible;
console.log({ fooCompatible });
//any型はstring型を入れるとstring型に遷移する
console.log(typeof fooCompatible);

let fooInCompatible: string;
let barInCompatible: number = 1;

// fooInCompatible=barInCompatible;
