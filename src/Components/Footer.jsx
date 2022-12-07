import React from 'react';
import {BsChatSquareDots} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='max-w-[1140px]  py-8 m-auto border-t-4 '>
     <div className='  flex items-center justify-center m-auto'>
        <BsChatSquareDots size={20} className='mx-2 text-[var(--primary-dark)]' />
        <p className='font-bold text-xl text-gray-700'>WEEKAWAY</p>
        
     </div>
    </div>
  )
}

export default Footer
