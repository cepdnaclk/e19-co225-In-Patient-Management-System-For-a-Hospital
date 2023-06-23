import React, { useState } from "react";
import Navbar from './DashboardItems/Navibar';
import Sidebar from './DashboardItems/Sidebar';

//Import the relevant  content items
import DisplayDashboard from "./patientFiles/dispDashboard";
import DisplayNotifications from "./patientFiles/dispNotifications";

function Patient() {
    // This contains Patient sidebar navigation items. Sidebar is updated using local state
    // state format: Id, svg Image, Name
    const [navigationItems, setNavigationItems] = useState([
        [0,
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
        </svg>,
        "Dashboard"
        ],   
        [ 1,
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
        </svg>,
        "Notifications"
        ]
      ]);

    //To Identify which button is clicked.
    const [selectedItem, setSelectedItem] = useState(0);

    const handleSidebarItemClick = (value) => {
        setSelectedItem(value)
    };

    const [relatedComponent, setRelatedComponent] = useState([ <DisplayDashboard/>, <DisplayNotifications/> ])
    return (
        <React.Fragment>
            <Navbar />
            <Sidebar navigationItems={navigationItems} onItemClick={handleSidebarItemClick} />
            <div className="p-2 sm:ml-64">
                <div className=" border-2 border-gray-200 border dark:border-gray-700 mt-14" style={ { borderRadius:"10px" } }>
               
                  <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={ { borderTopLeftRadius:"8px", borderTopRightRadius:"8px" } }>
                    <h1 class="font-bold pl-2"> {navigationItems[selectedItem][2]} </h1>
                  </div>

                  {/* Content is changed when a navigation button is clicked */}
                  { relatedComponent[selectedItem] }
                  
                </div>
            </div>   
        </React.Fragment>
    );
}

export default Patient;