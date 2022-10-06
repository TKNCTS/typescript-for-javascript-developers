export {};

let name: any = "Ham";

// let length = name.length as number; //asを用いることでこの変数がナンバー型であることをこちらから教えている。これがアサーション
// let length = (name as string).length;
let length = (<string>name).length;

//もしアサーションを用いるならばasを使う

// length = "foo";
