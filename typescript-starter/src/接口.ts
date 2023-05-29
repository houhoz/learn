interface Point {
  readonly x: number
  readonly y: number
  z?: number
  [key: string]: number | undefined
}

const a: Point = {
  x: 1,
  y: 2,
}

interface IFun {
  (x: number, y: number): string
}
let fn: IFun = (a, b) => {
  return 'a'
}

function css(ele: Element, sttr: string, value: string | number) {}
