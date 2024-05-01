import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Educational",
    "Horror",
    "Biblography",
    "AutoBiography",
    "History",
    "Self-help",
    "Memoir",
    "Businees",
    "Children Books",
    "Contemporary",
    "Travel",
    "Religion",
    "Art And Design"
  ]

  const [selectedBookCategory, setselectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
       console.log(event.target.value);
      setselectedBookCategory(event.target.value);
  }

  //handle book submission

  const handleBookSubmit = (event) => {
      event.preventDefault();
      const form = event.target;

      const bookTitle = form.bookTitle.value;
      const authorName = form.authorName.value;
      const imageUrl = form.imageUrl.value;
      const category = form.inputState.value;
      const bookDescription = form.bookDescription.value;
      const bookPdfUrl = form.bookPdfUrl.value;
      const price = form.price.value;
      
      const bookObj= {
        bookTitle,authorName,imageUrl,category,bookDescription,bookPdfUrl,price
      }

      console.log(bookObj)

      //send data to db

      fetch("http://localhost:5500/upload-book",{
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify(bookObj)
      }).then(res => res.json()).then(data =>{
        // console.log(data)
        alert(" Book uploaded successfully!!! ")
        form.reset();
      })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold text-blue-500'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* 1st row */}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Enter Book Name" required />
      </div>

          {/* Author name **/}

      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" type="text" name='authorName' placeholder="Enter Author Name" required />
      </div>
      </div>

       {/*2nd row*/}
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageUrl" value="Book image" />
        </div>
        <TextInput id="imageUrl" type="text" name='imageUrl' placeholder="Enter Book image" required />
      </div>

          {/* Category */}

      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label htmlFor="inputState" value="Book Category" />
        </div>

        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((Option) => <option key={Option} value={Option}>{Option}</option>)
          }
        </Select>

      </div>
      </div>
          {/*bookDescription*/}

          <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Enter Book Description" required className='w-full' rows={6} />
      </div>

        {/* price */}

        <div>
        <div className="mb-2 block">
          <Label htmlFor="price" value="Book Price" />
        </div>
        <TextInput id="price" type="number" placeholder="Enter Book price" required />
      </div>

            {/* book pdf link*/}

            <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPdfUrl" value="Book Pdf Url" />
        </div>
        <TextInput id="bookPdfUrl" name='bookPdfUrl' type="text" placeholder="Book Pdf Url" required />
      </div>

      <Button type="submit" className='mt-5'>Upload Your Book</Button>
    </form>
    </div>
  )
}

export default UploadBook
