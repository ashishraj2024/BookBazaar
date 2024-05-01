import React from 'react';

export default function SearchBar() {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
      />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md ml-2">
        Search
      </button>
    </div>
  );
}
