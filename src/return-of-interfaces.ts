export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {} //TypeScriptは1つしか継承することしかできない

//複数のインターフェイスをひとつにまとめることができる(実装する)！！→多重継承のようなことができる
interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kogeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }
  kogeki(): void {
    console.log("kogeki");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kogeki();
