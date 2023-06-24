import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  // remember to credit icons8 for the star wars logos
  // <a target="_blank" href="https://icons8.com/icon/21576/star-wars">Star Wars</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

  return (
    <main className='bg-gray-700'>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default App
