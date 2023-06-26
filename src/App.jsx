import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  // remember to credit icons8 for the star wars logos
  // <a target="_blank" href="https://icons8.com/icon/21576/star-wars">Star Wars</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

  return (
    <main className=''>
      <div className="fixed top-0">
        <Navbar />
      </div>

      <div className="bg-white min-h-screen pt-[5rem]">
        <Outlet />
      </div>

      <footer className='relative bg-[#FFC107]'>
        <p className='text-black font-black text-center'>05/04 be with you. <small className='font-medium'>All icons by <a target="_blank" href="https://icons8.com"  className='text-white'>Icons8</a></small></p>
      </footer>
    </main>
  )
}

export default App
