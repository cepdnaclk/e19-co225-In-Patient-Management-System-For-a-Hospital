import React, { useState } from "react";
import Navbar from './adminFiles/Navbar';
import Sidebar from './DashboardItems/Sidebar';
import AdminSidebar from './adminFiles/Adminsidebar';

import DisplayDashboard from "./adminFiles/displayDashboard";
import DisplayDoctors from "./adminFiles/displayDoctors";

function Admin() {
    // This contains Admin sidebar navigation items. Sidebar is updated using local state
    // state format: Id, svg Image, Name
    

    return (
        <>
          
            <Navbar/>
            {/* <Sidebar navigationItems={navigationItems} /> */}
            <AdminSidebar/>
            
            
            {/* <div className="p-2 sm:ml-64">
                <div className=" border-2 border-gray-200 border dark:border-gray-700 mt-14" style={ { borderRadius:"10px" } }> */}

            {/*!!!!!!!!!! content here */}
{/* <DisplayDashboard/> */}

{/* <DisplayDoctors/> */}



{/* 
                </div>
            </div> */}
        </>
    );
}

export default Admin;