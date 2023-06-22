import React from "react";
import Navbar from './DashboardItems/Navibar';
import Sidebar from './DashboardItems/Sidebar';

function Patient() {
    return (
        <React.Fragment>
            <Navbar/>
            <Sidebar/>
            <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border rounded-lg dark:border-gray-700 mt-14">

            </div>
            </div>
            
        </React.Fragment>

    );
}

export default Patient;