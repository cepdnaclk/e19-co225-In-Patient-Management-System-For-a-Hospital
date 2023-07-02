import React, { useState } from 'react';
import Navbar from "./Navbar";
import Nurses from "./NurseTable";
import AdminSideBar from "./AdminsideBar";

function AdminDoctors(props) {
  const { isMobile } = props;
  const open = isMobile;


  return (
    <>
      <div className="flex">
        <AdminSideBar isMobile={isMobile}/>
        <div className={` ${{props} ? "left-72 w-[calc(100%-300px)]" : "left-20 w-[calc(100%-50px)]"} absolute p-2 m-2`}>


          <Nurses isMobile={isMobile} />
        </div>
      </div>
    </>
  );
};

export default AdminDoctors;