import React from 'react'

const Contact = () => {
  return (
    <div id='Contact' className='max-w-[1140px] m-auto w-full py-16'>
      <h2 className='text-center text-2xl text-gray-700'>Send Us A Message</h2>
      <p className='text-center text-xl py-2 text-gray-700'>We are standing by </p>
      <div className='grid sm:grid-cols-2 mt-4'>
        <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src="https://media.istockphoto.com/id/1005890154/photo/view-of-the-sandy-beach-of-saona-island-la-altagracia-dominican-republic-copy-space-for-text.jpg?s=612x612&w=0&k=20&c=l4yOeToCbjAJr2llOiJiNtyzGEGR_2igsMMDYF3zu6s=" alt="/" />
      <form>
        <div className='grid grid-cols-2'>
          <input className='border p-2 m-2' type="text" placeholder='First' />
          <input className='border p-2 m-2' type="text" placeholder='last' />
          <input className='border p-2 m-2' type="email" placeholder='Email' />
          <input className='border p-2 m-2 col-span-2' type="tel" placeholder='Phone' />
          <textarea className='border m-2 p-2 col-span-2'  cols="30" rows="10" placeholder='Message...'></textarea>
          <button className='col-span-2 m-2 rounded-lg'>Submit</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Contact
