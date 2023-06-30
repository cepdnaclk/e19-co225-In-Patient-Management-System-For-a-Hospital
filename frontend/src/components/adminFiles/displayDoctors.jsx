import React, { useState } from 'react';
import Doctor from './singleItems/singleDoctor';
import Adminsidebar from './AdminSideBar';

function AdminDoctors(props) {
  const { isMobile } = props;
  const open = isMobile;
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: 'Dr. John Doe',
      profession: 'Cardiologist',
      description: 'Specializes in heart-related conditions.',
      imgLocation: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDN8fGJ1c2luZXNzJTIwbWFufGVufDB8fHx8MTYzMjM5NzczNQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=500&fit=crop",
    },
    {
      id: 2,
      name: 'Dr. Jane Smith',
      profession: 'Dermatologist',
      description: 'Expert in skin disorders and treatments.',
      imgLocation: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDN8fGJ1c2luZXNzJTIwbWFufGVufDB8fHx8MTYzMjM5NzczNQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=500&fit=crop",
    },
    {
      id: 3,
      name: 'Dr. Jane Smith',
      profession: 'Dermatologist',
      description: 'Expert in skin disorders and treatments.',
      imgLocation: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDN8fGJ1c2luZXNzJTIwbWFufGVufDB8fHx8MTYzMjM5NzczNQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=500&fit=crop",
    },
    {
      id: 4,
      name: 'Dr. Jane Smith',
      profession: 'Dermatologist',
      description: 'Expert in skin disorders and treatments.',
      imgLocation: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixid=MnwyMDkyMnwwfDF8c2VhcmNofDN8fGJ1c2luZXNzJTIwbWFufGVufDB8fHx8MTYzMjM5NzczNQ&ixlib=rb-1.2.1q=85&fm=jpg&crop=faces&cs=srgb&w=600&h=500&fit=crop",
    },
    // Add more doctors here if needed
  ]);

  return (
    <>
      <Adminsidebar isMobile={isMobile} />
      <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`}
       style={{ backgroundColor: "red", }}>
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" 
        style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
          <h1 className="font-bold pl-2"> Doctors </h1>
        </div>

        <div className="bg-gray-100 p-6">
          <h1>Under Construction</h1>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 justify-center">

              <Doctor doctors={doctors} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminDoctors;

