import React from 'react'

const Gallery = () => {
  return (
    <div id='Gallery' className='max-w-[1140px] m-auto px-4 py-16'>
      
        <h2 className='text-2xl text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4 '>
        <div className='   sm:col-span-3 col-span-1 row-span-2'>
          <img src='https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
      <div >
          <img className=' border-2 border-blue-700 p-2  w-full h-full object-cover' src='https://images.pexels.com/photos/59924/pexels-photo-59924.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
      <div>
          <img className=' border-2 border-blue-700 p-2  w-full h-full object-cover'  src='https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
      <div>
          <img className=' border-2 border-blue-700 p-2 w-full h-full object-cover'  src='https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div>
      <div>
          <img className=' border-2 border-blue-700 p-2  w-full h-full object-cover'  src='https://images.pexels.com/photos/1449729/pexels-photo-1449729.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
      </div> 
    </div>
    </div>
  )
}

export default Gallery
