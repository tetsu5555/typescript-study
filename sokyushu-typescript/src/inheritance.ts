class Person5 {
  // protectedにすることによって子クラスからアクセスすることができる
  protected name: string;
  protected sex: string;

  constructor(name: string, sex: string) {
    this.name = name;
    this.sex = sex;
  }

  show(): string {
    return `${this.name}は${this.sex}です。`;
  }
}

class BusinessPerson extends Person5 {
  work(): string {
    return `${this.name}はテキパキ働きます。`;
  }
}

const bp = new BusinessPerson("tetsu", "男");
