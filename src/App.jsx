// import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  // const [ categories, setCategories ] = useState([])
  // useEffect(() => {
  //   fetch("https://swapi.dev/api/")
  //   .then(res => res.json())
  //   .then(data => setCategories(data))
  
  //   return () => {
  //     setCategories([])
  //   }
  // }, [])
  

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

      <footer className='fixed bottom-0 w-screen bg-[#FFC107]'>
        <p className='text-black font-black text-center'>May the Force be with you</p>
      </footer>
    </main>
  )
}

export default App
