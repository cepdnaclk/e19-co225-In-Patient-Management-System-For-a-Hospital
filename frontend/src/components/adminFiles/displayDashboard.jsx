import React from 'react';
import Adminsidebar from './AdminSideBar';

function AdminDashboard(props) {
  const { isMobile } = props;
  const open = isMobile;
  //Values for the top display section --> Total doctors, Total nurse, Total users
  const totalDoctors = 87;  //Change where necessary
  const totalNurses = 152;
  const totalUsers = 249;
  const totalwards = 24;

  return (
    <>
      <Adminsidebar isMobile={isMobile} />
      <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`}>

        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
          <h1 className="font-bold pl-2"> Dashboard </h1>
        </div>

        <div className="bg-gray-100 p-6">
          {/* Doctors, Nurse, User count */}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">

                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-green-600">
                      {/* image here */}
                    </div>
                  </div>

                  <div className="flex-1 text-right md:text-center">
                    <h2 className="font-bold uppercase text-gray-600">Total Doctors</h2>
                    <p className="font-bold text-3xl">{totalDoctors}</p>
                  </div>

                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-yellow-500 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-blue-600">
                      {/* image here */}
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
              <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-yellow-500 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-red-600">
                      {/* image here */}
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
        



        
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <div className="bg-gradient-to-b from-purple-200 to-yellow-100 border-b-4 border-yellow-500 rounded-lg shadow-xl p-5">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-purple-600">
                      {/* image here */}
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h2 className="font-bold uppercase text-gray-600">Total Wards</h2>
                    <p className="font-bold text-3xl">{totalwards}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      


        

        {/* Add content Here */}


      </div>
    </>
  );
}

export default AdminDashboard;