import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="">
      <NavLink className="text-[#FFC107]" to='/'>
        <button className='bg-black py-4 px-6 hover:bg-stone-800 hover:text-white hover:outline-black duration-500'>
          Home
        </button>
      </NavLink>
    </div>
  )
}

export default Home