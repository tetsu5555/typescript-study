class Person3 {
  // コンストラクタの引数にアクセス修飾子を付与することで
  // プロパティの定義から代入までのコードを代用できる
  constructor(private name: string, private sex: string) {}

  public show(): string {
    return `${this.name}は${this.sex}です。`;
  }
}

let p3 = new  Person3('tetsu', '男');
console.log(p3.show())

// ↓ privateなためコンパイルエラーになる
// console.log(p3.name)
