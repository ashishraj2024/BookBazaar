import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () =>{
      fetch("http://localhost:5500/all-books").then(res => res.json()).then(data => setBooks(data.slice(3,11)))
    }, [])
    return (
      <div>
        <BookCards books={books} headline="Other Books"/>
        </div>
    )
}

export default OtherBooks
