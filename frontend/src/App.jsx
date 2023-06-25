import React from 'react';
import Patient from "./components/Patient"
import Admin from './components/Admin';
import AdminAddStaff from './components/adminFiles/AdminAddStaff';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        // <>
        // <BrowserRouter>
            <Routes>
                <Route index element = {<Admin/>}/>
                <Route path="/" element= {  <Admin/>    }  />
                <Route path="/patient" element= {  <Patient/>  } />   
                <Route path="/admin/addStaff" element= {  <AdminAddStaff/>    }  />
            </Routes>
        // </BrowserRouter>
        // </>
    );
}

export default App;
