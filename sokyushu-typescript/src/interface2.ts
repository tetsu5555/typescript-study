// getAreaメソッドを定義したFigure5インターフェース
interface Figure5 {
  getArea(): number;
}

// Triangle4は明示的にFigureインターフェースを実装しない
class Triangle4 {
  constructor(private width: number, protected height: number) {}

  getArea(): number {
    return this.width * this.height / 2;
  }
}

// t4はFigure5 interfaceを実装してる必要がある
// = getAreadメソッドを実装している必要がある
const t4: Figure5 = new Triangle4(100, 550);
console.log(t4.getArea());
