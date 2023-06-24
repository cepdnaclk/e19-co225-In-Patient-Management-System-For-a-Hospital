import React from 'react';
import Patient from "./components/Patient"
import Admin from './components/Admin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
    return (
        // <>
        // <BrowserRouter>
            <Routes>
                <Route index element = {<Admin/>}/>
                <Route path="/" element= {  <Admin/>    }  />
                <Route path="/patient" element= {  <Patient/>  } />
            </Routes>
        // </BrowserRouter>
        // </>
    );
}

export default App;
