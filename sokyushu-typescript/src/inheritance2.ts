class Person6 {
  constructor(protected name: string, protected sex: string) {}

  show(): string {
    return `${this.name}は${this.sex}です。`;
  }
}

class BusinnessPerson2 extends Person6 {
  protected clazz: string;
  constructor(name: string, sex: string, clazz: string) {
    super(name, sex);
    this.clazz = clazz;
  }

  show(): string {
    return super.show() + `${this.clazz}です。`;
  }
}

const bp2 = new BusinnessPerson2("tetsu", "男", "エンジニア");
console.log(bp2.show());
