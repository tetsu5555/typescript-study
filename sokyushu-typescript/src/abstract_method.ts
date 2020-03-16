class Figure2 {
  // コンストラクタ
  constructor(protected width: number, protected height: number){}

  // 図形の面積を求めるメソッド
  // オーバーライドされることを前提としているためほとんど意味がない
  getArea(): number {
    return 0;
  }
}

class Triangle extends Figure2 {
  // メソッドをオーバーライド
  getArea(): number {
    return this.width * this.height / 2;
  }
}

const t = new Triangle(10, 5);
console.log(t.getArea());
