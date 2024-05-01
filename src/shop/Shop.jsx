import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const Shop = () => {
  const [books, setBooks]= useState([]);

  useEffect(() => {
    fetch("http://localhost:5500/all-books").then(res => res.json().then(data => setBooks(data)));
  }, [])
  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>See All Our Books</h2>

      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map(books =><Card href="#" className="max-w-sm">
            <img src={books.imageUrl} alt="" className='h-100'/>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {books.bookTitle}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
           {books.bookDescription}
          </p>

          <button className='bg-blue-700 font-semibold rounded-full text-white py-3'>Buy Now</button>
        </Card>)
        }
      </div>
    </div>
  )
}

export default Shop
