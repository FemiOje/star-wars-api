import { useState } from 'react';
import Logo from '../assets/svgs/icons8-star-wars-black-orange.svg';
import { NavLink } from 'react-router-dom';
import Switcher from "./Switcher";


const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem('darkMode') === 'true' ? true : false
    );

    const toggleDarkMode = () => {
        const updatedMode = !isDarkMode;
        setIsDarkMode(updatedMode);
        localStorage.setItem('darkMode', updatedMode.toString());
    };

    const [navOpen, setNavOpen] = useState(false);
    function toggleNav() {
        setNavOpen((prevValue) => !prevValue)
    }

    return (
        <div className='relative'>
            <nav className='flex flex-row bg-white dark:bg-black w-screen shadow-lg'>
                <div className='self-center ml-5'>
                    <button className="menu outline-sm" onClick={toggleNav}>
                        <svg viewBox="0 0 100 80" width="40" height="25">
                            <rect width="100" height="15" fill="#FFC107"></rect>
                            <rect y="30" width="100" height="15" fill="#FFC107"></rect>
                            <rect y="60" width="100" height="15" fill="#FFC107"></rect>
                        </svg>
                    </button>
                </div>

                <div className='m-auto'>
                    <img src={Logo} alt="logo" />
                </div>

                <div className='flex items-center justify-center mr-7 mt-[1.3rem]'>
                    <Switcher />
                </div>


            </nav>

            {navOpen &&
                <div className='absolute top-[5rem] h-screen bg-white dark:bg-black flex flex-col shadow-xl divide-y border-y w-screen sm:w-[30vw]'>
                    <NavLink className="text-[#FFC107]" to='/' onClick={toggleNav}>
                        <p className='py-4 px-6 hover:bg-slate-800 hover:text-white duration-500'>
                            Home
                        </p>
                    </NavLink>

                    <NavLink className="text-[#FFC107]" to='/films' onClick={toggleNav}>
                        <p className='py-4 px-6 hover:bg-slate-800 hover:text-white duration-500'>
                            Films
                        </p>
                    </NavLink>

                    <NavLink className="text-[#FFC107]" to='/people' onClick={toggleNav}>
                        <p className='py-4 px-6 hover:bg-slate-800 hover:text-white duration-500'>
                            People
                        </p>
                    </NavLink>

                    <NavLink className="text-[#FFC107]" to='/planets' onClick={toggleNav}>
                        <p className='py-4 px-6 hover:bg-slate-800 hover:text-white duration-500'>
                            Planets
                        </p>
                    </NavLink>

                    <NavLink className="text-[#FFC107]" to='/starships' onClick={toggleNav}>
                        <p className='py-4 px-6 hover:bg-slate-800 hover:text-white duration-500'>
                            Starships
                        </p>
                    </NavLink>

                    <NavLink className="text-[#FFC107]" to='/species' onClick={toggleNav}>
                        <p className='py-4 px-6 hover:bg-slate-800 hover:text-white duration-500'>
                            Species
                        </p>
                    </NavLink>

                    <NavLink className="text-[#FFC107]" to='/vehicles' onClick={toggleNav}>
                        <p className='py-4 px-6 hover:bg-slate-800 hover:text-white duration-500'>
                            Vehicles
                        </p>
                    </NavLink>
                </div>
            }
        </div>
    )
}

export default Navbar