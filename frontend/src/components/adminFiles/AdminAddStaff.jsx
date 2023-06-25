import { FaHandHoldingMedical } from "react-icons/fa"; 
import React, { useState } from 'react';
import { AiFillFileAdd } from "react-icons/ai"; 
import { AiFillDashboard } from "react-icons/ai"; 
import { FaReadme } from "react-icons/fa"; 
import { RiHospitalFill } from "react-icons/ri"; 
import { GiNurseFemale } from "react-icons/gi"; 
import { GiStethoscope } from "react-icons/gi"; 
import Navbar from "../adminFiles/Navbar";
import AddStaffForm from "../../components/adminFiles/AddStaffForm";
import AdminSideBar from "../../components/adminFiles/Adminsidebar";




function Adminsidebar() {

  const Menus = [
    { title: "Dashboard" , src: <AiFillDashboard size={30}/> },
    { title: "Doctors", src: <GiStethoscope size={30}/> },
    { title: "Nurses" , src: <GiNurseFemale size={30} />},
    { title: "Wards", src: <RiHospitalFill size={30} /> },
    { title: "Admission clerks", src: <FaReadme size={30} /> },
    { title: "Add to staff", src:<AiFillFileAdd size={30} />  },
    
  ];
  const [open, setOpen] = useState(true);
  return (
    <>
    <div className="flex">
      <AdminSideBar/>
      <div className="h-screen flex-1 p-7">
        
        <AddStaffForm/>
      </div>
    </div>
    </>
  );
};

export default Adminsidebar;