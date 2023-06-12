function sleep(delay) {
  for (let start = Date.now(); Date.now() - start <= delay; ) {}
}

// 每一个子项可以认为是一个 fiber
const works = [
  () => {
    console.log('第 1 个任务开始')
    sleep(20)
    console.log('第 1 个任务结束')
  },
  () => {
    console.log('第 2 个任务开始')
    sleep(20)
    console.log('第 2 个任务结束')
  },
  () => {
    console.log('第 3 个任务开始')
    sleep(20)
    console.log('第 3 个任务结束')
  },
]

window.requestIdleCallback(workLoop, { timeout: 1000 })

function workLoop(deadLine) {
  console.log('本帧的剩余时间剩', parseInt(deadLine.timeRemaining()))
  /*
   * deadLine {
   *   timeRemaining(), 返回此帧还剩下多少 ms 供用户使用
   *   didTimeout 返回 cb 任务是否超时
   * }
   */
  while (
    (deadLine.timeRemaining() > 0 || deadLine.didTimeout) &&
    works.length > 0
  ) {
    // 对象 两个属性 timeRemaining()
    performUnitOfWord()
  }

  if (works.length > 0) {
    window.requestIdleCallback(workLoop, { timeout: 1000 })
  }
}

function performUnitOfWord() {
  works.shift()() // 取出第一个元素执行
}
