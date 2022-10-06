export {};
let name = "Tomoki";

name = "Ham";

//as constを後ろにつけることでnickName変数を変えることができない
let nickName = "Ham" as const;
// nickName = "TOM";
