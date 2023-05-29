// function printArg<T>(arg: T): T {
//   console.log(arg)
//   return arg
// }

// printArg<string>('hello') // 定义 T 为 string

// printArg('hello') // TS 类型推断，自动推导类型为 string
// 处理函数参数
type Print = <T>(arg: T) => T
const printFn: Print = function print(arg) {
  console.log(arg)
  return arg
}

function print1<T>(arg: T): T {
  console.log(arg)
  return arg
}

interface Iprint<T> {
  (arg: T): T
}

const myPrinnt: Iprint<number> = print1

// 函数副作用操作

interface UserInfo {
  name: string
  age: number
}

function request<T>(url: string): Promise<T> {
  return fetch(url).then(res => res.json())
}

request<UserInfo>('user/info').then(res => {
  console.log(res)
})

// 约束泛型

interface ILength {
  length: number
}

function printLength<T extends ILength>(arg: T): T {
  console.log(arg.length)
  return arg
}

// 泛型约束类

class Stack<T> {
  private data: T[] = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T | undefined {
    return this.data.pop()
  }
}

const s1 = new Stack<number>()

// 泛型约束接口
interface IKeyValue<T, U> {
  key: T
  value: U
}

const k1: IKeyValue<number, string> = { key: 18, value: 'lin' }
const k2: IKeyValue<string, number> = { key: 'lin', value: 18 }
