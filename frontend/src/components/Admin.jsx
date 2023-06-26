import React from "react";
import Navbar from './adminFiles/Navbar';
import AdminSidebar from './adminFiles/Adminsidebar';

function Admin() {
    // This contains Admin sidebar navigation items. Sidebar is updated using local state
    // state format: Id, svg Image, Name


    return (
        <>
            <Navbar />
            <AdminSidebar />
        </>
    );
}

export default Admin;