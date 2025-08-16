import { Link, NavLink } from 'react-router-dom';
import React from 'react'
import '../styles/Navbar.css'

const Navbar = ({ onHomeClick, onAboutClick, onServiceClick, onContactClick }) => {
    return (
        <nav className='glass fixed top-2 left-1/2 -translate-x-1/2 z-50 px-4 py-2 hover:scale-101 transition-all duration-300 ease-in-out'>
            <div className='flex justify-between items-center text-white font-semibold text-lg'>
                <div className='glass-name font-medium text-xl tracking-widest text-white drop-shadow-sm drop-shadow-gray-600/80'>
                    <h1 className='hidden md:block'>
                        Surawut Boonying
                    </h1>
                    <h1 className='block md:hidden'>
                        SB
                    </h1>
                </div>
                <div className="link flex gap-2 md:gap-8 text-base md:text-xl">
                    <button onClick={onHomeClick} className='btn font-semibold text-white cursor-none drop-shadow-sm drop-shadow-gray-600/80'>Home</button>
                    <button onClick={onAboutClick} className='btn font-semibold text-white cursor-none drop-shadow-sm drop-shadow-gray-600/80'>About</button>
                    <button onClick={onServiceClick} className='btn font-semibold text-white cursor-none drop-shadow-sm drop-shadow-gray-600/80'>Services</button>
                    <button onClick={onContactClick} className='btn font-semibold text-white cursor-none drop-shadow-sm drop-shadow-gray-600/80'>Contact</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar