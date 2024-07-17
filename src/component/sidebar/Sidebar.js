import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <section id="sidebar" className="bg-gray-800 text-white w-64 min-h-screen p-4 space-y-6 fixed top-0 left-0 transform transition-transform duration-300 lg:translate-x-0 -translate-x-full">
      <Link to="/" className="flex items-center space-x-2 text-xl font-bold">
        <i className='bx bxs-smile text-yellow-500'></i>
        <span className="text">AdminHub</span>
      </Link>
      <ul className="side-menu top space-y-2">
        <li className="bg-gray-700 rounded-md">
          <Link to="/" className="flex items-center space-x-2 p-2">
            <i className='bx bxs-dashboard'></i>
            <span className="text">Dashboard</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <div className="flex items-center space-x-2 p-2">
            <i className='bx bxs-shopping-bag-alt'></i>
            <span className="text">My Store</span>
          </div>
          <ul className="pl-4 space-y-1">
            <li className="hover:bg-gray-700 rounded-md">
              <Link to="/add-product" className="block p-2">Add Product</Link>
            </li>
            <li className="hover:bg-gray-700 rounded-md">
              <Link to="/list-product" className="block p-2">List Product</Link>
            </li>
          </ul>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <Link to="/analytics" className="flex items-center space-x-2 p-2">
            <i className='bx bxs-doughnut-chart'></i>
            <span className="text">Analytics</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <Link to="/message" className="flex items-center space-x-2 p-2">
            <i className='bx bxs-message-dots'></i>
            <span className="text">Message</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <Link to="/team" className="flex items-center space-x-2 p-2">
            <i className='bx bxs-group'></i>
            <span className="text">Team</span>
          </Link>
        </li>
      </ul>
      <ul className="side-menu space-y-2">
        <li className="hover:bg-gray-700 rounded-md">
          <Link to="/settings" className="flex items-center space-x-2 p-2">
            <i className='bx bxs-cog'></i>
            <span className="text">Settings</span>
          </Link>
        </li>
        <li className="hover:bg-gray-700 rounded-md">
          <Link to="/logout" className="flex items-center space-x-2 p-2 text-red-500">
            <i className='bx bxs-log-out-circle'></i>
            <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
