// 泛型是指：在定义西数、接口或类的时候不预先指定数据类型，而在使用时再指定类型的特性。
// 作用：泛型可以提升应用的可重用性，如使用其创建组件，则可以使组件可以支持多种数据类型。

/**
 *
 * @param arr
 * @param item
 * @returns
 */

const pushArr = <T>(arr: T[], item: T): T[] => {
  arr.push(item)
  return arr
}

pushArr<number>([], 1)
pushArr<string>([], '1')

function swapGeneric<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}

const res = swapGeneric<string, number>(['1', 1])
