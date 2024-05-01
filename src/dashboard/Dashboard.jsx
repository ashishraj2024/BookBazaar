import React from 'react'
import SearchBar from './SearchBar'

const Dashboard = () => {
  return (
    <div style={{width:"100%"}}>
      <SearchBar/>
       <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Book Store Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Total Books</h2>
          <p className="text-gray-700">1000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Total Sales</h2>
          <p className="text-gray-700">$5000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Top Selling Book</h2>
          <p className="text-gray-700">Book Name</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard
