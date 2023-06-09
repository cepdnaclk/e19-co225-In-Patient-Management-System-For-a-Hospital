import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import AdminDashboard from './components/adminFiles/displayDashboard';
// import AdminDoctors from './components/adminFiles/displayDoctors';
import AdminDashboard from './components/adminFiles/AdminDashboard';
import AdminDoctors from './components/adminFiles/AdminDoctors';
import AdminClerks from './components/adminFiles/AdminClerks';
import AdminNurses from './components/adminFiles/AdminNurses';
import AdminWards from './components/adminFiles/AdminWards';
import AdminAddStaff from './components/adminFiles/AdminAddStaff';

import PatientDashboard from './components/patientFiles/patientDashboard';
// import LoginPatient from './components/loginfiles/loginpatient';
import LoginPatient from './components/loginfiles/NicLogin';

import DoctorDashboard from './components/doctorFiles/doctorDashboard';
import DoctorProfile from './components/doctorFiles/doctorProfile';
import PatientHealthDetails from './components/doctorFiles/patients';
import UpdatePatients from './components/doctorFiles/updatePatients';

import NurseDashboard from './components/NurseFiles/NurseDashboard';
import NurseProfile from './components/NurseFiles/NurseProfile';
import UnAuthorized from './components/unauthorized';
import Login from './components/loginfiles/Login';
import Test from './components/jwttest';
import RequireAuth from './components/RequireAuth';
import Layout from './components/Layout';


import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 600);
    };

    // Add event listener to window resize
    window.addEventListener('resize', handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<Login />} />
          {/* <Route path="admin" element={<AdminDashboard isMobile={isMobile} />} />
          <Route path="admin/dashboard" element={<AdminDashboard isMobile={isMobile} />} />
          <Route path="admin/clerks" element={<AdminClerks isMobile={isMobile} />} />
          <Route path="admin/doctors" element={<AdminDoctors isMobile={isMobile} />} />
          <Route path="admin/nurses" element={<AdminNurses isMobile={isMobile} />} />
          <Route path="admin/wards" element={<AdminWards isMobile={isMobile} />} />
          <Route path="admin/addStaff" element={<AdminAddStaff isMobile={isMobile} />} /> */}

          <Route path='/patient' element={<LoginPatient />} />
          {/* <Route path="/patient/dashboard" element={<PatientDashboard isMobile={isMobile} />} /> */}
          <Route path="/patient/dashboard/:id" element={<PatientDashboard isMobile={isMobile} />} />

          <Route path="/doctor" element={<DoctorDashboard isMobile={isMobile} />} />
          <Route path="/doctor/dashboard" element={<DoctorDashboard isMobile={isMobile} />} />
          <Route path="/doctor/profile" element={<DoctorProfile isMobile={isMobile} />} />
          <Route path="/doctor/patients" element={<PatientHealthDetails isMobile={isMobile} />} />
          <Route path="/doctor/updatePatients" element={<UpdatePatients isMobile={isMobile} />} />

          <Route path="/nurse" element={<NurseDashboard isMobile={isMobile} />} />
          <Route path="/nurse/dashboard" element={<NurseDashboard isMobile={isMobile} />} />
          <Route path="/nurse/profile" element={<NurseProfile isMobile={isMobile} />} />

          <Route path="unauthorized" element={<UnAuthorized isMobile={isMobile} />} />

          <Route element={<RequireAuth allowedRoles="ROLE_ADMIN" />}>
            <Route path="test" element={<AdminDashboard />} />
            <Route path="admin" element={<AdminDashboard isMobile={isMobile} />} />
            <Route path="admin/dashboard" element={<AdminDashboard isMobile={isMobile} />} />
            <Route path="admin/clerks" element={<AdminClerks isMobile={isMobile} />} />
            <Route path="admin/doctors" element={<AdminDoctors isMobile={isMobile} />} />
            <Route path="admin/nurses" element={<AdminNurses isMobile={isMobile} />} />
            <Route path="admin/wards" element={<AdminWards isMobile={isMobile} />} />
            <Route path="admin/addStaff" element={<AdminAddStaff isMobile={isMobile} />} />
          </Route>
        </Route>

      </Routes>
    </ThemeProvider>
  );
}

export default App;
