import React from 'react';
import Patient from "./components/Patient"
import Admin from './components/Admin';
import { Route, Routes } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element= {  <Admin/>    }  />
            <Route path="/patient" element= {  <Patient/>  } />
        </Routes>
    );
}

export default App;
