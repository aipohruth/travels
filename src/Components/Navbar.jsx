import React , {useState} from 'react';
import {FaBars, FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram } from 'react-icons/fa';
//import {BsChatSquareDots} from 'react-icons/bs';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center z-10 absolute bg-gray-700/80 text-white'>
      <ul className='hidden sm:flex px-4'>
        <li>
            <a href='/'>Home</a>
        </li>
        <li>
            <a href='#Gallery'>Gallery</a>
        </li>
        <li>
            <a href='#Deal'>Deals</a>
        </li>
        <li>
            <a href='#Contact'>Contact</a>
        </li>
      </ul>
      <div className='flex justify-between'>
        <FaFacebookF className='mx-4'/>
        <FaGooglePlusG className='mx-4' />
        <FaTwitter className='mx-4' />
        <FaInstagram  className='mx-4'/>
      </div>
      <div className='sm:hidden z-10'>
        <FaBars onClick={() => handleNav()} size={20} className=' mr-4 cursor-pointer'/>
      </div>
      <div className={ nav ? 'overflow-y-hidden md:hidden ease-in px-4 py-7 flex flex-col w-full duration-300 text-gray-300 absolute left-0 top-0 h-screen bg-black/90': 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
      <ul className='text-center pt-12 w-full h-full'>
        <li className='text-2xl py-8'>
            <a href='/'>Home</a>
        </li>
        <li className='text-2xl py-8'>
            <a href='#Gallery'>Gallery</a>
        </li>
        <li className='text-2xl py-8'>
            <a href='#Deal'>Deals</a>
        </li>
        <li className='text-2xl py-8'>
            <a href='#Contact'>Contact</a>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar
