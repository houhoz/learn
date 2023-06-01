class Persons {
  // public  公共的 允许在类的外面进行调用
  // protected 允许在类内及继承的子类中使用
  // private 只允许在类内使用

  name = 'to'
  getName() {
    return this.name
  }
}

const persons = new Persons()

class Persons1 extends Persons {
  constructor() {
    super()
    console.log(super.getName)
    console.log(this.getName)
  }
  getName(): string {
    return 'form'
  }
}

// 类类型接口

interface FoodInterface {
  type: string
}

class FoodClass implements FoodInterface {
  constructor(public type: string) {}
}

// class FoodClass implements FoodInterface {
//   type: string
//   constructor(arg: string) {
//     this.type = arg
//   }
// }

// 接口继承类

// 1. 接口可以继承类，当接口继承类之后，会继承成员（类型），但是不包括实现
// 2. 接口还会继承private 和 protected修饰的成员，但是这个接口只可被这个类或它的子类实现

interface I extends Persons {}

// 类与类，接口与接口之间使用extends
// 类与接口，implements

class C extends Persons implements I {
  getName(): string {
    return 'from' + 'to'
  }
}
