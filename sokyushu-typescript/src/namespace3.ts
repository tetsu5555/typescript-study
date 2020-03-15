namespace Wings2 {
  export namespace MainApp {
    export class Hoge {
      hoge() {
        console.log('hoge');
      }
    }
    export function fuga() {
      console.log('fuga');
    }
  }
}

const h2 = new Wings2.MainApp.Hoge();
h2.hoge();

Wings2.MainApp.fuga();
