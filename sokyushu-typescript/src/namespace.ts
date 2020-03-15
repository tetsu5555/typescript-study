// 名前空間を定義
namespace MainApp {
  // exportを指定しないと参照できなかった
  export class Hoge {
    hoge() {
      console.log("hoge!!!");
    }
  }

  export function foo() {
    console.log("foo!!!");
  }
}

// MainApp名前空間に定義されたHogeクラスを参照する
const hoge = new MainApp.Hoge();
hoge.hoge();
MainApp.foo();
