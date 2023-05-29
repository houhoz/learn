/**
 * never
 * 是其他任意类型的子类型的类型被称为底部类型(bottom type)。
 * 在 TypeScript 中，never 类型便为空类型和底部类型。never 类型的变量无法被赋值，与其他类型求交集为自身，求并集不参与运算。
 */

// 应用一: 联合类型中的过滤

type Exclude1<T, U> = T extends U ? never : T

// 相当于: type A = 'a'
type A = Exclude1<'x' | 'a', 'x' | 'y' | 'z'>

// T | never // 结果为T
// T & never // 结果为never

// 取一个映射类型中所有value为指定类型的key。例如，已知某个React组件的props类型，我需要“知道”（编程意义上）哪些参数是function类型。

interface SomeProps {
  a: string
  b: number
  c: (e: MouseEvent) => void
  d: (e: TouchEvent) => void
}
// 如何得到 'c' | 'd' ？

type GetKeyByValueType<T, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never
}[keyof T]

type FunctionPropNames = GetKeyByValueType<SomeProps, Function> // 'c' | 'd'

// 应用二：防御性编程
// 举个具体点的例子，当你有一个 union type:
interface Foo {
  type: 'foo'
}
interface Bar {
  type: 'bar'
}
type All = Foo | Bar

// 在 switch 当中判断 type，TS 是可以收窄类型的 (discriminated union)：

function handleValue(val: All) {
  switch (val.type) {
    case 'foo':
      // 这里 val 被收窄为 Foo
      break
    case 'bar':
      // val 在这里是 Bar
      break
    default:
      // val 在这里是 never
      const exhaustiveCheck: never = val
      break
  }
}

// 注意在 default 里面我们把被收窄为 never 的 val 赋值给一个显式声明为 never 的变量。如果一切逻辑正确，那么这里应该能够编译通过。但是假如后来有一天你的同事改了 All 的类型：
// type All = Foo | Bar | Baz
// 然而他忘记了在 handleValue 里面加上针对 Baz 的处理逻辑，这个时候在 default branch 里面 val 会被收窄为 Baz，导致无法赋值给 never，产生一个编译错误。所以通过这个办法，你可以确保 handleValue 总是穷尽 (exhaust) 了所有 All 的可能类型。

/**
 * unknown
 * unknown指的是不可预先定义的类型，在很多场景下，它可以替代any的功能同时保留静态检查的能力。
 */

const num: number = 10
;(num as unknown as string).split('') // 注意，这里和any一样完全可以通过静态检查
// 这个时候unknown的作用就跟any高度类似了，你可以把它转化成任何类型，不同的地方是，在静态编译的时候，unknown不能调用任何方法，而any可以。

const foo: unknown = 'string'
foo.substr(1) // Error: 静态检查不通过报错
const bar: any = 10
bar.substr(1)

// unknown的一个使用场景是，避免使用any作为函数的参数类型而导致的静态类型检查bug：

function test(input: unknown): number {
  if (Array.isArray(input)) {
    return input.length // Pass: 这个代码块中，类型守卫已经将input识别为array类型
  }
  return input.length // Error: 这里的input还是unknown类型，静态检查报错。如果入参是any，则会放弃检查直接成功，带来报错风险
}

// 我们在一些无法确定函数参数（返回值）类型中 unknown 使用的场景非常多
// 在不确定函数参数的类型时
// 将函数的参数声明为unknown类型而非any
// TS同样会对于unknown进行类型检测，而any就不会
function resultValueBySome(val: unknown) {
  if (typeof val === 'string') {
    // 此时 val 是string类型
    // do someThing
  } else if (typeof val === 'number') {
    // 此时 val 是number类型
    // do someThing
  }
  // ...
}

// https://juejin.cn/post/7211358106629750841#heading-5
