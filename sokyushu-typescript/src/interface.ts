// getAreaメソッドを定義したFigureインターフェース
interface Figure4 {
  getArea(): number;
}

// Figure4 interfaceを実装
// = getAreadメソッドを実装している必要がある
class Triangle3 implements Figure4 {
  constructor(private width: number, protected height: number) {}

  getArea(): number {
    return this.width * this.height / 2;
  }
}

const t3 = new Triangle3(100, 550);
console.log(t3.getArea());
