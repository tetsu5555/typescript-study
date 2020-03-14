class Person2 {
  private name: string;
  private sex: string;

  constructor(name: string, sex: string) {
    this.name = name;
    this.sex = sex;
  }

  public show(): string {
    return `${this.name}は${this.sex}です。`;
  }
}

let p2 = new  Person2('tetsu', '男');
console.log(p2.show())

// ↓ privateなためコンパイルエラーになる
// console.log(p2.name)
