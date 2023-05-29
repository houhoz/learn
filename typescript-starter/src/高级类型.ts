// 索引类型

// keyof（索引查询）
interface IPerson {
  name: string
  age: number
}

type Test = keyof IPerson // 'name' | 'age'

// T[K]（索引访问）
let type1: IPerson['name'] = '' // string
let type2: IPerson['age'] // number
console.log('type1', type1)

// extends (泛型约束)

// interface ILength {
//   length: number
// }

// function printLength<T extends ILength>(arg: T): T {
//   console.log(arg.length)
//   return arg
// }

// 检查动态属性
// 改造前
const userInfo = {
  name: 'lin',
  age: '18',
}

// function getValues(userInfo: any, keys: string[]) {
//   return keys.map(key => userInfo[key])
// }

// 改造后

function getValues<T, K extends keyof T>(
  userInfo: T,
  keys: K[]
): T[K][] {
  return keys.map(key => userInfo[key])
}

// 映射类型

// in

type Person1 = 'name' | 'school' | 'major'

type Obj = {
  [p in Person1]: string
}

// Partial

interface IPerson {
  name: string
  age: number
}

type IPartial = Partial<IPerson>

let p1: IPartial = {}

// Partial 的实现用到了 in 和 keyof
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// Readonly
interface IPerson {
  name: string
  age: number
}

type IReadOnly = Readonly<IPerson>

let p2: IReadOnly = {
  name: 'lin',
  age: 18,
}

// Readonly 原理

/**
 * Make all properties in T readonly
 */
//  type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

// Pick

interface IPerson1 {
  name: string
  age: number
  sex: string
}

type IPick = Pick<IPerson1, 'name' | 'age'>

let p3: IPick = {
  name: 'lin',
  age: 18,
}

// Pick 原理

/**
 * From T, pick a set of properties whose keys are in the union K
 */
//  type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// Record

interface IPerson {
  name: string
  age: number
}

type IRecord = Record<string, IPerson>

let personMap: IRecord = {
  person1: {
    name: 'lin',
    age: 18,
  },
  person2: {
    name: 'liu',
    age: 25,
  },
}

// Record 原理

/**
 * Construct a type with a set of properties K of type T
 */
//  type Record<K extends keyof any, T> = {
//   [P in K]: T;
// }

// 条件类型

// T extends U ? X : Y
//若类型 T 可被赋值给类型 U,那么结果类型就是 X 类型,否则就是 Y 类型

type Test1 = Exclude<'a' | 'b' | 'c', 'a'>

// Exclude 原理
/**
 * Exclude from T those types that are assignable to U
 */
//  type Exclude<T, U> = T extends U ? never : T;

// Extract
// Extract<T, U>提取联合类型 T 和联合类型 U 的所有交集。

type Test11 = Extract<'key1' | 'key2', 'key1'>

// Extract 原理

/**
 * Extract from T those types that are assignable to U
 */
// type Extract<T, U> = T extends U ? T : never;

// 工具类型
// Omit
// Omit<T, U>从类型 T 中剔除 U 中的所有属性。
interface IPerson {
  name: string
  age: number
}

type IOmit = Omit<IPerson, 'age'>
// Omit 原理

/**
 * Construct a type with the properties of T except for those in type K.
 */
//  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
