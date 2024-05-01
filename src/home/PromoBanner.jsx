import React from 'react'
import { Link } from 'react-router-dom'
import AwardPic from "../assets/banner-books/awardbooks.png"

const PromoBanner = () => {
  return (
    <div className='mt-16 py-20 bg-teal-200 px-6 lg:px-24'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl font-bold mb-6 leading-snug'>2024 National Book Award for Fiction Shortlist!</h2>
                <Link to="/shop" className= 'block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Get Promo</button></Link>
            </div>
            <div>
                <img src={AwardPic} alt="" className='w-96' />
            </div>
        </div>
    </div>
  )
}

export default PromoBanner
