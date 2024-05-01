import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const{_id, bookTitle, imageUrl, authorName, bookDescription} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24 text-center bg-cyan-200 w-full h-full'>
        <img src={imageUrl} alt="" className='h-96 inline-block' />
        <h2 className='font-bold'>{bookTitle}</h2>
        <h3>{authorName}</h3>
        <p>{bookDescription}</p>
        <button className='bg-blue-700 font-semibold rounded-full text-white px-5 py-3'>Buy Now</button>
        </div>
  )
}

export default SingleBook
