import React, { useState } from 'react';

function DisplayDashboard() {
  //Values for the top display section --> Total doctors, Total nurse, Total users
  const [totalDoctors, setTotalDoctors] = useState(87);  //Change where necessary
  const [totalNurses, setTotalNurses] = useState(152);
  const [totalUsers, setTotalUsers] = useState(249);

    return (
<React.Fragment>
    {/* Top Heading */}
    <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={ { borderTopLeftRadius:"8px", borderTopRightRadius:"8px" } }>
      <h1 class="font-bold pl-2"> Dashboard </h1>
    </div>

    {/* Doctors, Nurse, User count */}
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">

            {/* Image section   */}
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                </svg>
              </div>
            </div>
            
            {/* text section */}
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Total Doctors</h2>
              <p className="font-bold text-3xl">{totalDoctors}</p>
            </div>

          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-blue-600">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 20">
                  <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Total Nurses</h2>
              <p className="font-bold text-3xl">{totalNurses}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
          <div className="flex flex-row items-center">
            <div className="flex-shrink pr-4">
              <div className="rounded-full p-5 bg-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 text-right md:text-center">
              <h2 className="font-bold uppercase text-gray-600">Total Users</h2>
              <p className="font-bold text-3xl">{totalUsers}</p>
            </div>
          </div>
        </div>
      </div>
    </div>











</React.Fragment>
    );
}

export default DisplayDashboard;