abstract class Figure3 {
  constructor(protected width: number, protected height: number){}

  // 抽象メソッドとしてgetAreaを準備
  abstract getArea(): number
}

/// getAreaを実装していないと
// ↓のエラーが出た
// 非抽象クラス 'Triangle2' はクラス 'Figure3' からの継承抽象メンバー 'getArea' を実装しません
class Triangle2 extends Figure3 {
  getArea(): number {
    return this.width * this.height / 2;
  }
}

const t2 = new Triangle2(10, 55);
console.log(t2.getArea());
