class Person  {
  // プロパティ
  name: string;
  sex: string;

  // コンストラクタ
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }

  // メソッド
  show() {
    return `${this.name}は${this.sex}です。`;
  }
}


let p = new Person('理央', '女');
console.log(p);
