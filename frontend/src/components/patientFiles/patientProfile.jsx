import React from 'react';
import PatientSidebar from './patientSidebar';

function PatientProfile(props) {
    const { isMobile } = props;
    const open = isMobile;
    return (
        <>
            <PatientSidebar isMobile={isMobile} />
            <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2 text-black`}>
                {/* Section 1 - Dashboard Heading */}
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-500 to-blue-900 text-white p-4 shadow text-2xl" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                    <h1 className="font-bold pl-2">Profile</h1>
                </div>
                <div className="bg-slate-300 p-6">
                    <h1>Under Construction</h1>
                </div>


            </div>
        </>
    );
}

export default PatientProfile;