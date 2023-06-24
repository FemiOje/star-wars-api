import { useState } from 'react';
import Logo from '../assets/svgs/icons8-star-wars-black-orange.svg';
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const [navOpen, setNavOpen] = useState(false);
    function toggleNav() {
        setNavOpen((prevValue) => !prevValue)
    }

    return (
        <>
            <nav className='fixed flex flex-row top-0 bg-black w-full shadow-lg '>
                <button className="menu outline-sm" onClick={toggleNav}>
                    <svg viewBox="0 0 100 80" width="40" height="30" className="self-center">
                        <rect width="100" height="15" fill="#FFC107"></rect>
                        <rect y="30" width="100" height="15" fill="#FFC107"></rect>
                        <rect y="60" width="100" height="15" fill="#FFC107"></rect>
                    </svg>
                </button>

                <img src={Logo} alt="logo" className="m-auto" />

                {/* toggle for light mode */}
            </nav>
            {navOpen &&
                <div className='bg-black flex flex-col shadow-lg w-full sm:w-[70vw]'>
                    <div className='bg-black hover:bg-gray-700 transition-500 duration-500'>
                        <NavLink to='/'>Home</NavLink>
                    </div>

                    <div className='bg-black hover:bg-gray-700 transition-500 duration-500'>
                        <NavLink to='/films'>Films</NavLink>
                    </div>

                    <div className='bg-black hover:bg-gray-700 transition-500 duration-500'>
                        <NavLink to='/people'>People</NavLink>
                    </div>

                    <div className='bg-black hover:bg-gray-700 transition-500 duration-500'>
                        <NavLink to='/planets'>Planets</NavLink>
                    </div>

                    <div className='bg-black hover:bg-gray-700 transition-500 duration-500'>
                        <NavLink to='/spaceships'>Spaceships</NavLink>
                    </div>

                    <div className='bg-black hover:bg-gray-700 transition-500 duration-500'>
                        <NavLink to='/species'>Species</NavLink>
                    </div>

                    <div className='bg-black hover:bg-gray-700 transition-500 duration-500'>
                        <NavLink to='/vehicles'>Vehicles</NavLink>
                    </div>

                </div>
            }
        </>
    )
}

export default Navbar