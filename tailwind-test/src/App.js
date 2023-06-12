import BlogHome from './BlogHome'
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='btn-primary'>按钮</div>
        <div className='text-[14px] hover:text-[30px] md:bg-blue-500 p-1 border border-black border-solid'>
          光
        </div>
      </header>
      <BlogHome />
    </div>
  )
}

export default App
