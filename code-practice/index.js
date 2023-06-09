// 不确定参数个数求和（ES6语法）
function sum() {
  let result = Array.from(arguments).reduce((acc, cur) => {
    return (acc = acc + cur)
  }, 0)
  return result
}

// sleep 延时执行

function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1111)
    }, time)
  })
}

// 五次执行有成功返回成功，五次失败返回失败

function test() {
  return new Promise((resolve1, reject) => {
    let errorTime = 0
    let randomNum = 0
    let resultBool = false
    const logic = () => {
      return new Promise((resolve2, reject) => {
        randomNum = Math.floor(Math.random() * 5)
        if (randomNum < 4) {
          errorTime++
          resolve2(false)
        } else {
          resultBool = true
          resolve1(errorTime)
        }
      })
    }
    while (!resultBool && errorTime < 5) {
      logic().then(innerRes => {
        resultBool = innerRes
      })
    }
    if (!resultBool && errorTime === 5) {
      reject(`5次失败-----${randomNum}`)
    }
  })
}

const debounce = (fn, delay) => {
  let timer = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}

function retry(fn, times, delay) {
  let currTimes = 1
  return new Promise(function (resolve, reject) {
    function attempt() {
      fn()
        .then(resolve)
        .catch(function (err) {
          console.log(`第 ${currTimes} 次尝试`)
          if (times === 0) {
            reject(err)
          } else {
            times--
            currTimes++
            setTimeout(attempt(), delay)
          }
        })
    }

    attempt()
  })
}
