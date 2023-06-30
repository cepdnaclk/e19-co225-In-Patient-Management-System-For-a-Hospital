import React, { useState } from 'react';
import Navbar from "./Navbar";
import AddStaffForm from "./AddStaffForm";
import AdminSideBar from "./AdminSideBar";

function AdminAddStaff(props) {


  return (
    <>
      <div className="flex">
        <AdminSideBar isMobile = {props}/>
        <div className= {` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`}>


          <AddStaffForm />
        </div>
      </div>
    </>
  );
};

export default AdminAddStaff;