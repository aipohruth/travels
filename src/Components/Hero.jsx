import React from 'react'

const Hero = () => {
  return (
    <div className=' w-full h-[90vh]'>
      <img className='w-full h-full object-cover'  src='https://media.istockphoto.com/id/902424712/photo/beautiful-panoramic-landscape.jpg?s=612x612&w=0&k=20&c=-kNFvILQb4veNRrHxvhxg4A4lI2LUAxfbFzWjCiKMmk=' alt='beach'/>
        <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[40%] w-full text-white md:-[50%] max-w-[600px] flex flex-col '>
            <h1 className='text-4xl font-bold'>Find your Special Trip</h1>
            <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
                 dolores nobis harum fuga sed eligendi, aut
                 similique voluptatem? Officiis aut nam doloremque, tempora ea omnis
                  totam? Facilis sint reiciendis ad!</p>
                  </div>
        </div>
      
    </div>
  )
}

export default Hero
