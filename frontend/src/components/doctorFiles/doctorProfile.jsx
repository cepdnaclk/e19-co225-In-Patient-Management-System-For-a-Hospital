import React from 'react';
import DoctorSidebar from './doctorSidebar';

function DoctorProfile(props) {
    const { isMobile } = props;
    const open = isMobile;
    return (
        <>
            <DoctorSidebar isMobile={isMobile} />
            <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`}>
                {/* Section 1 - Dashboard Heading */}
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                    <h1 className="font-bold pl-2">Profile</h1>
                </div>
                <div className="bg-slate-300 p-6">
                    {/* Section 2 - Personal Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
                        <div>
                            <p>Doctor's name: John Doe</p>
                            <p>Doctor's ID: 2</p>
                            <p>Doctor's age: 35</p>
                            <p>Home Address: Text here</p>
                            <p>Specialty: Cardiology</p>

                            {/* Add more personal information fields as needed */}
                        </div>
                    </section>

                    {/* Section 3 - Education */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Education</h2>
                        <ul>
                            <li>Medical School: XYZ University</li>
                            <li>Residency: ABC Hospital</li>
                            {/* Add more education details if necessary */}
                        </ul>
                    </section>

                    {/* Section 4 - Experience */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Experience</h2>
                        <ul>
                            <li>Hospital A</li>
                            <li>Hospital B</li>
                            {/* Add more experience details if required */}
                        </ul>
                    </section>
                </div>
            </div>
        </>
    );
}

export default DoctorProfile;
