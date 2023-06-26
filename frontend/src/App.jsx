import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Admin from './components/Admin';
import AdminAddStaff from './components/adminFiles/AdminAddStaff';
import PatientDashboard from './components/patientFiles/patientDashboard';
import PatientProfile from './components/patientFiles/patientProfile';

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
        <Routes>
            <Route index element={<Admin />} />
            <Route path="/" element={<Admin />} />
            <Route path="/admin/addStaff" element={<AdminAddStaff />} />

            <Route path="/patient" element={<PatientDashboard isMobile={isMobile} />} />
            <Route path="/patient/dashboard" element={<PatientDashboard isMobile={isMobile} />} />
            <Route path="/patient/profile" element={<PatientProfile isMobile={isMobile} />} />
        </Routes>
    );
}

export default App;
