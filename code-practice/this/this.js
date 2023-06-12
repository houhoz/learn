class Person {
  constructor(name) {
    this.name = 'Jerry'
  }
  getName() {
    return {
      name: 'Tom',
      logName() {
        console.log(this.name)
      },
    }
  }
}

// logName改为箭头函数输出什么?

const p = new Person()
p.getName().logName()
