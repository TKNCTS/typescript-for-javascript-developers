export {};

//やっている内容は同じのため、これをひとつにまとめられないか→genericsを用いる
//新しい名前の関数をつくらなくて済む

// const echo=(arg:number):number=>{
//   return arg;
// };

// const echo=(arg:string):string=>{
//   return arg;
// };

const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>("Hello!"));
console.log(echo<boolean>(true));
