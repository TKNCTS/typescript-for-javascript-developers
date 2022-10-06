export {};

class Animal {
  constructor(public name: string) {}
  run(): string {
    return "I can't run";
  }
}

class Lion extends Animal {
  public _weight: number;
  constructor(name: string, _weight: number) {
    super(name);
    this._weight = _weight;
  }
  run(): string {
    return "I can run 80km.";
  }
  weight(): string {
    return `This Lion is ${this._weight} kg.`;
  }
}

let animal = new Animal("Mickey");
console.log(animal.run());

let lion = new Lion("Simba", 80);
console.log(lion.run());
console.log(lion.weight());
