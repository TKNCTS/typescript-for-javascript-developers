export {};

enum Months {
  January = 1, //Januaryのインデックスを1にするために
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

Months.January;
Months.February;

console.log(Months.April);

enum COLORS {
  RED = "#FF0000",
  WHITE = "#FFFFFF",
  GREEN = "#008000",
  BLUE = "#0000FF",
  BLACK = "#000000",
}

let green = COLORS.GREEN;
console.log({ green });

//新たに追加する方法
enum COLORS {
  YELLOW = "#FFFF00",
}

let black = COLORS.BLACK;
console.log({ black });

console.log(COLORS);
