// 名前空間に階層を儲けることもできる
namespace Wings.MainApp {
  export class Hoge {
    hoge() {
      console.log('hoge');
    }
  }
  export function fuga(){
    console.log("fuga");
  }
}

const h = new Wings.MainApp.Hoge();
h.hoge()

Wings.MainApp.fuga();
