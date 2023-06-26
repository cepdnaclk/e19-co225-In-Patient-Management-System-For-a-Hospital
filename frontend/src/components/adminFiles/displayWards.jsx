import React from 'react';
import Adminsidebar from './AdminSideBar';

function AdminWards(props) {
    const { isMobile } = props;
    const open = isMobile;
    return (
        <>
            <Adminsidebar isMobile={isMobile} />
            <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`} style={{ backgroundColor: "red", }}>
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                    <h1 className="font-bold pl-2"> Wards </h1>
                </div>

                <div className="bg-gray-100 p-6">
                    <h1>Under Construction</h1>
                </div>
            </div>
        </>
    );
}

export default AdminWards;