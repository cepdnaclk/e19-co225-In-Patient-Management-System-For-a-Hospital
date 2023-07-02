import React from 'react';
import DoctorSidebar from './doctorSidebar';

function DoctorProfile(props) {
  const { isMobile } = props;
  const open = isMobile;
  return (
    <>
      <DoctorSidebar isMobile={isMobile} />

      <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2 text-black`}>
        {/* Section 1 - Dashboard Heading */}
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
          <h1 className="font-bold pl-2">Profile</h1>
        </div>

        <div className="bg-slate-300 p-6">
          {/* Section 2 - Personal Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            <div className="bg-white rounded-lg p-4 mb-4">
              <p className="text-blue-900">Doctor's name: John Doe</p>
              <p className="text-blue-900">Doctor's ID: 2</p>
              <p className="text-blue-900">Doctor's age: 35</p>
              <p className="text-blue-900">Home Address: Text here</p>
              <p className="text-blue-900">Specialty: Cardiology</p>
              {/* Add more personal information fields as needed */}
            </div>
          </section>

          {/* Section 3 - Education */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <ul className="bg-white rounded-lg p-4 mb-4">
              <li className="text-blue-900">Medical School: XYZ University</li>
              <li className="text-blue-900">Residency: ABC Hospital</li>
              {/* Add more education details if necessary */}
            </ul>
          </section>

          {/* Section 4 - Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <ul className="bg-white rounded-lg p-4">
              <li className="text-blue-900">Hospital A</li>
              <li className="text-blue-900">Hospital B</li>
              {/* Add more experience details if required */}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}

export default DoctorProfile;
