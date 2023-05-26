import '@/App.css'
import scssStyles from './app.scss'

function App() {
  return (
    <>
      <h2 className='h2'>Hello world</h2>
      <div className={scssStyles['scssBox']}>
        <div className={scssStyles['box']}>scssBox</div>
      </div>
    </>
  )
}

export default App
