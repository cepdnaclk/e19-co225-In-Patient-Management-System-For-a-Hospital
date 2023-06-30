import React, { useState } from 'react';
import Navbar from "./Navbar";
import Doctors from "./DoctorsTable";
import AdminSideBar from "./AdminsideBar";

function AdminAddStaff(props) {


  return (
    <>
      <div className="flex">
        <AdminSideBar isMobile = {props}/>
        <div className="h-screen flex-1 p-7 ">


          <Doctors />
        </div>
      </div>
    </>
  );
};

export default AdminAddStaff;