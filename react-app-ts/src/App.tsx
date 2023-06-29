import React, { useState } from 'react'
import LikeButton from './components/LikeButton'
// import MouseTracker from './components/MouseTracker'
// import useMousePosition from './hooks/useMousePosition'
// import withLoader from './components/withLoader'
import useURLLoader from './hooks/useURLLoader'
import useDebounce from './hooks/useDebounce'

interface IShowResult {
  message: string
  status: string
}

// const DogShow: React.FC<{ data: IShowResult }> = ({ data }) => {
//   return (
//     <>
//       <h2>Dog show: {data.status}</h2>
//       <img src={data.message} alt='' />
//     </>
//   )
// }

function App() {
  // const positions = useMousePosition()
  // const WrappedDogShow = withLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')

  const [show, setShow] = useState(true)
  const [data, loading] = useURLLoader(
    'https://dog.ceo/api/breeds/image/random',
    [show]
  )
  const debouncedShow = useDebounce(show, 100)
  const dogResult = data as IShowResult
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        toggle refresh dog
      </button>
      {loading ? (
        <p>🐶读取中</p>
      ) : (
        <img src={dogResult && dogResult.message} alt='' />
      )}
      {/* <WrappedDogShow /> */}
      {/* <p>
        X: {positions.x}, Y: {positions.y}
      </p> */}
      {debouncedShow && <LikeButton />}
      {/* <MouseTracker /> */}
    </div>
  )
}

export default App
