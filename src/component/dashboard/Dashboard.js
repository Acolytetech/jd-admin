import React from 'react';


const Dashboard = () => {
  return (
    <main className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <ul className="flex items-center text-gray-600">
            <li>
              <a href="#" className="text-blue-600">Dashboard</a>
            </li>
            <li><i className='bx bx-chevron-right mx-2'></i></li>
            <li>
              <a className="text-blue-600" href="#">Home</a>
            </li>
          </ul>
        </div>
        <a href="#" className="bg-blue-600 text-white py-2 px-4 rounded flex items-center">
          <i className='bx bxs-cloud-download mr-2'></i>
          <span>Download PDF</span>
        </a>
      </div>

      <ul className="grid gap-4 grid-cols-1 md:grid-cols-3">
        <li className="bg-white shadow rounded-lg p-4 flex items-center">
          <i className='bx bxs-calendar-check text-4xl text-blue-600 mr-4'></i>
          <span>
            <h3 className="text-2xl font-bold">1020</h3>
            <p className="text-gray-600">New Order</p>
          </span>
        </li>
        <li className="bg-white shadow rounded-lg p-4 flex items-center">
          <i className='bx bxs-group text-4xl text-blue-600 mr-4'></i>
          <span>
            <h3 className="text-2xl font-bold">2834</h3>
            <p className="text-gray-600">Visitors</p>
          </span>
        </li>
        <li className="bg-white shadow rounded-lg p-4 flex items-center">
          <i className='bx bxs-dollar-circle text-4xl text-blue-600 mr-4'></i>
          <span>
            <h3 className="text-2xl font-bold">$2543</h3>
            <p className="text-gray-600">Total Sales</p>
          </span>
        </li>
      </ul>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
      
      </div>
    </main>
  );
};

export default Dashboard;
