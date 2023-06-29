import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  // react 如何清除effect
  // react 在每次渲染之后都会执行当前effect之前， 对上一个effect进行清除
  // inner
  // before render
  // remove effect 0
  // add effect 209
  useEffect(() => {
    console.log('add effect', positions.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('click', updateMouse)
    return () => {
      // 清除的是上一次的副作用
      console.log('remove effect', positions.x)
      document.removeEventListener('click', updateMouse)
    }
  })
  console.log('before render')
  return (
    <p>
      X: {positions.x}, Y: {positions.y}
    </p>
  )
}

export default MouseTracker
