// 函数重载
function handleData(x: string): string[]
function handleData(x: number): string

function handleData(x: any): any {
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x.toString().split('').join('_')
  }
}

handleData('abc').join('_')
// handleData(123).join('_')
