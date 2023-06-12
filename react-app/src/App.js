import { Routes, Route, Outlet, Link } from 'react-router-dom'
import UseTransition from './component/UseTransition'
import UseDeferredValue from './component/UseDeferredValue'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<UseTransition />} />
        <Route
          path='useDeferredValue'
          element={<UseDeferredValue />}
        />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <div className='flex'>
      <nav className='pr-6 border-r-2'>
        <ul>
          <li className='text-blue-600 visited:text-purple-600'>
            <Link to='/'>UseTransition</Link>
          </li>
          <li className='text-blue-600 visited:text-purple-600'>
            <Link to='/useDeferredValue'>UseDeferredValue</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default App
