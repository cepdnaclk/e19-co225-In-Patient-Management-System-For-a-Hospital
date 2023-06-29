import React, { useState } from 'react';
import { FaHandHoldingMedical } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillDashboard } from "react-icons/ai";
import { FaReadme } from "react-icons/fa";
import { RiHospitalFill } from "react-icons/ri";
import { GiNurseFemale } from "react-icons/gi";
import { GiStethoscope } from "react-icons/gi";
import Navbar from "./Navbar";
import AddStaffForm from "./AddStaffForm";
import AdminSideBar from "./AdminSideBar";

function AdminAddStaff(props) {


  return (
    <>
      <div className="flex">
        <AdminSideBar isMobile = {props}/>
        <div className="h-screen flex-1 p-7 ">


          <AddStaffForm />
        </div>
      </div>
    </>
  );
};

export default AdminAddStaff;