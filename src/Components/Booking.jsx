import React from 'react'

const Booking = () => {
  return (
    <div id='Deals' className='max-w-[1140px]  w-full p-4 m-auto'>
      <form className='lg:flex lg:justify-between w-full'>
        <div className='flex flex-col my-2 py-2'>
            <label>Destination</label>
            <select className=' lg:w-[300px] md:w-full p-2 rounded-lg border-4 border-blue-200 outline-none'>
                <option >Maldives</option>
                <option >Bora Bora</option>
                <option >Maritius</option>
                <option >Fiji Island</option>
            </select>
        </div>
        <div className=' flex w-full mr-2'>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label >Check-In</label>
                <input className='border rounded-md p-2' type='date' />
            </div>
            <div  className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
                <label >Check-Out</label>
                <input  className='border rounded-md p-2' type='date' />
            </div>
        </div>
        <div className='flex flex-col w-full my-2 py-2'>
            <label>Search</label>
            <button>Rates and availabilities</button>
        </div>
      </form>
    </div>
  )
}

export default Booking
