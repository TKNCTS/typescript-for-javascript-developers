export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error("test");
  console.log({ result });
} catch (error) {
  console.log({ error });
}

//never型は呼びもとに戻ってこない。

// let foo: void = undefined;
// let bar: never = undefined;

//never型はundifinedやnull型さえ入らないが、never型のものだけは入る
