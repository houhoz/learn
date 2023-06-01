// 接口 -> 定义任意的结构或者类型
interface publicPoint {
  x: number
  y: number
  z: number
}

interface Point1 extends publicPoint {
  a: number
}

const point: Point1 = { x: 1, y: 2, z: 4, a: 3 }

// 函数类型
interface Func {
  (num1: number, num2: number): number
}

const addFunc: Func = (arg1, arg2) => arg1 + arg2

// 索引类型

interface Role {
  [id: number]: string
}

const role: Role = ['admin', 'user']

// console.log(role.length)
// 当定义索引类型之后，数组的length方法，将不存在，包括Array原型链上的其他方法也不存在

const role1: Role = {
  0: '1',
  1: '2',
}

// 绕开多余的类型检查
interface MyType {
  color: string
}

const getTypes = (myType: MyType) => {
  return `${myType.color}`
}

//1. 类型断言

getTypes({
  color: 'red',
  num: 1,
} as MyType)

// 2, 索引签名

interface MyType {
  color: string
  [propsName: string]: any
}

getTypes({
  color: 'red',
  num: 1,
})
