import React, { useState } from 'react';
import DoctorSidebar from './doctorSidebar';

const patients = [
  { id: 1, name: "John Doe", age: 40, diagnosis: "Hypertension", bloodPressure: "120/80", heartRate: 80, conditions: "", prescriptions: "" },
  { id: 2, name: "Jane Smith", age: 35, diagnosis: "Diabetes", bloodPressure: "130/85", heartRate: 75, conditions: "", prescriptions: "" },
  { id: 3, name: "Michael Johnson", age: 45, diagnosis: "Asthma", bloodPressure: "110/70", heartRate: 70, conditions: "", prescriptions: "" },
];

function UpdatePatients(props) {
  const { isMobile } = props;
  const open = isMobile;
  const [patientId, setPatientId] = useState('');
  const [patientDetails, setPatientDetails] = useState(null);
  const [updatedConditions, setUpdatedConditions] = useState('');
  const [updatedHealthParams, setUpdatedHealthParams] = useState('');
  const [prescription, setPrescription] = useState('');

  const handlePatientIdChange = (event) => {
    setPatientId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Find the patient details based on the entered ID
    const selectedPatient = patients.find((patient) => patient.id === parseInt(patientId));

    if (selectedPatient) {
      setPatientDetails(selectedPatient);
      setUpdatedConditions(selectedPatient.conditions);
      setUpdatedHealthParams(selectedPatient.bloodPressure);
      setPrescription(selectedPatient.prescriptions);
    } else {
      setPatientDetails(null);
      console.log('Patient not found!');
    }
  };

  const handleConditionsChange = (event) => {
    setUpdatedConditions(event.target.value);
  };

  const handleHealthParamsChange = (event) => {
    setUpdatedHealthParams(event.target.value);
  };

  const handlePrescriptionChange = (event) => {
    setPrescription(event.target.value);
  };

  const handleUpdate = () => {
    // Update patient details
    const updatedPatientDetails = {
      ...patientDetails,
      conditions: updatedConditions,
      bloodPressure: updatedHealthParams,
      prescriptions: prescription,
    };

    // Find the index of the patient in the array
    const index = patients.findIndex((patient) => patient.id === patientDetails.id);

    // Update the patient details in the array
    patients[index] = updatedPatientDetails;

    // Clear the input fields and reset the patient details
    setUpdatedConditions('');
    setUpdatedHealthParams('');
    setPrescription('');
    setPatientDetails(null);
    setPatientId('');

    console.log('Patient details updated:', updatedPatientDetails);
  };

  return (
    <>
      <DoctorSidebar isMobile={isMobile} />
      <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2 text-black`}>
        {/* Section 1 - Dashboard Heading */}
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
          <h1 className="font-bold pl-2">Patients</h1>
        </div>
        <div className="bg-slate-300 p-6">
          {/* Section 2 - Patient Health Details */}
          <h2 className="text-2xl font-bold mb-4">Patient Health Details</h2>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4">
            <label className="text-blue-900">
              Patient ID:
              <input type="text" value={patientId} onChange={handlePatientIdChange} className="ml-2 px-2 py-1 rounded" />
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Update Health Details</button>
          </form>

          {patientDetails && (
            <div className="bg-white rounded-lg p-4 mt-4">
              <p className="text-blue-900">Patient Name: {patientDetails.name}</p>
              <p className="text-blue-900">Patient Age: {patientDetails.age}</p>
              <p className="text-blue-900">Diagnosis: {patientDetails.diagnosis}</p>
              <p className="text-blue-900">Blood Pressure: {patientDetails.bloodPressure}</p>
              <p className="text-blue-900">Heart Rate: {patientDetails.heartRate}</p>

              <h3 className="text-xl font-bold mt-4">Update Patient Conditions</h3>
              <input type="text" value={updatedConditions} onChange={handleConditionsChange} className="mt-2 px-2 py-1 rounded" />

              <h3 className="text-xl font-bold mt-4">Update Health Parameters</h3>
              <input type="text" value={updatedHealthParams} onChange={handleHealthParamsChange} className="mt-2 px-2 py-1 rounded" />

              <h3 className="text-xl font-bold mt-4">Prescription</h3>
              <textarea value={prescription} onChange={handlePrescriptionChange} className="mt-2 px-2 py-1 rounded" />

              <button onClick={handleUpdate} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Update</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UpdatePatients;
