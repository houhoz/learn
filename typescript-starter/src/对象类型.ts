let data: {
  x: number
  y: string
} = { x: 1, y: '2' }

// interface Person {
//   username: string
//   age: number
// }

// const user1: Person = {
//   username: 'ho',
//   age: 3,
// }
// const user2: Person = {
//   username: 'h111',
//   age: 36,
// }

class Person {
  constructor(public username: string, public age: number) {}
}

const user1: Person = new Person('ho', 3)
const user2: Person = new Person('h111', 46)

const arr: Array<number> = [1, 2, 3]

const arr1: string[] = ['1']

enum HTTP_CODE {
  OK = 200,
  NOT_FOUND = 404,
}

HTTP_CODE.OK

function add(x: number, y: number): number {
  return x + y
}

let v = add(1, 2)
