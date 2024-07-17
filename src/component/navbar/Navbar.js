import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 shadow-md">
      <div className="flex items-center">
        <button className="text-white text-3xl">
          <i className='bx bx-menu'></i>
        </button>
        <a href="#" className="text-white ml-4 text-lg">Categories</a>
      </div>
      <form action="#" className="relative flex items-center">
        <input
          type="search"
          placeholder="Search..."
          className="p-2 rounded-l-md border-none focus:ring-2 focus:ring-indigo-500"
        />
        <button type="submit" className="p-2 bg-indigo-500 text-white rounded-r-md">
          <i className='bx bx-search'></i>
        </button>
      </form>
      <div className="flex items-center">
        <input type="checkbox" id="switch-mode" hidden />
        <label htmlFor="switch-mode" className="switch-mode"></label>
        <a href="#" className="relative text-white mx-2">
          <i className='bx bxs-bell'></i>
          <span className="absolute top-0 right-0 inline-flex items-center justify-center h-6 w-6 bg-red-600 text-white text-xs font-bold rounded-full">8</span>
        </a>
        <a href="#" className="ml-2">
          <img src="img/people.png" alt="Profile" className="w-10 h-10 rounded-full" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
