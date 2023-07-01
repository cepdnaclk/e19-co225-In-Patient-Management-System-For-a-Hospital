import React from 'react';
import Adminsidebar from './AdminsideBar';

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
      <h3 className='color: bg-white'> hello</h3>
      <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`}>

        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
          <h1 className="font-bold pl-2"> Dashboard </h1>
        </div>

        <div className="bg-gray-100 p-6">
          {/* Doctors, Nurse, User count */}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
              <img src="https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image" className="w-80 h-40" />

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
              <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
              <img src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1083&q=80" alt="Image" className="w-80 h-40" />
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
              <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
              <img src="https://images.unsplash.com/photo-1606318313647-137d1f3b4d3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1177&q=80" alt="Image" className="w-80 h-40" />
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-pink-600">
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


            <div className="w-full md:w-1/2 xl:w-1/3 p-6">
              <div className="bg-gradient-to-b from-purple-200 to-yello-100 border-b-4 border-purple-500 rounded-lg shadow-xl p-5">
              <img src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80" alt="Image" className="w-80 h-40" />
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded-full p-5 bg-purple-600">
                   
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





        </div>

        {/* Add content Here */}


      </div>
    </>
  );
}

export default AdminDashboard;