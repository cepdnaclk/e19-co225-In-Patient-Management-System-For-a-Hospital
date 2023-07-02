import React, { useState } from 'react';
import DoctorSidebar from './doctorSidebar';

const patients = [
  { id: 1, name: "John Doe", age: 40, diagnosis: "Hypertension", bloodPressure: "120/80", heartRate: 80 },
  { id: 2, name: "Jane Smith", age: 35, diagnosis: "Diabetes", bloodPressure: "130/85", heartRate: 75 },
  { id: 3, name: "Michael Johnson", age: 45, diagnosis: "Asthma", bloodPressure: "110/70", heartRate: 70 },
];

function PatientHealthDetails(props) {
  const { isMobile } = props;
  const open = isMobile;
  const [patientId, setPatientId] = useState('');
  const [patientDetails, setPatientDetails] = useState(null);

  const handlePatientIdChange = (event) => {
    setPatientId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Find the patient details based on the entered ID
    const selectedPatient = patients.find((patient) => patient.id === parseInt(patientId));

    if (selectedPatient) {
      setPatientDetails(selectedPatient);
    } else {
      setPatientDetails(null);
      console.log('Patient not found!');
    }
  };

  return (
    <>
      <div className={` ${open ? "w-72" : "w-20 "} bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black h-screen p-5  pt-8 duration-300 fixed`}>
        <DoctorSidebar isMobile={isMobile} />
      </div>
      <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`}>
        {/* Section 1 - Dashboard Heading */}
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
          <h1 className="font-bold pl-2">Profile</h1>
        </div>
        <div className="bg-slate-300 p-6">
          {/* Section 2 - Patient Health Details */}
          <h2 className="text-2xl font-bold mb-4">Patient Health Details</h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4">
            <label className="text-blue-900">
              Patient ID:
              <input type="text" value={patientId} onChange={handlePatientIdChange} className="ml-2 px-2 py-1 rounded" />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Get Health Details</button>
          </form>

          {patientDetails && (
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-blue-900">Patient Name: {patientDetails.name}</p>
              <p className="text-blue-900">Patient Age: {patientDetails.age}</p>
              <p className="text-blue-900">Diagnosis: {patientDetails.diagnosis}</p>
              <p className="text-blue-900">Blood Pressure: {patientDetails.bloodPressure}</p>
              <p className="text-blue-900">Heart Rate: {patientDetails.heartRate}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default PatientHealthDetails;
