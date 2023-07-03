import React, { useEffect, useState } from 'react';
import PatientSidebar from './patientSidebar';
import CircularProgressBar from "../widgets/circularProgress";
import axios from "axios";

import { AiOutlineUserAdd } from "react-icons/ai";
import { LiaBirthdayCakeSolid } from "react-icons/Lia";
import { BsHospital } from "react-icons/Bs";
import { LiaAllergiesSolid } from "react-icons/Lia";
import PatientService from "../../services/PatientService";

function PatientDashboard(props) {
    const { isMobile } = props;
    const open = isMobile;

    //Header Values
    const [userName, setUserName] = useState([]);
    const [userID, setuserID] = useState([]);

    const [dob, setDOB] = useState([]);
    const [age, setAge] = useState([]);

    const [dateOfAdmit, setdateOfAdmit] = useState([]);
    const [isDischarged, setisDischarged] = useState([]);

    const [Allergies, setAllergies] = useState([]);
    const [ward, setWard] = useState([]);

    //Health Status
    const bodyTemperature = 36
    const sugarLevel = 130
    const bloodPressure = 79

    useEffect(() => {
        const fetchData = async () => {
            const currentUrl = window.location.href
            const segments = currentUrl.split("/");
            const nic = segments[segments.length - 1];
            // console.log(nic);
            try {
                const data = await PatientService.getData(nic);
                console.log(data.data)

                //Set Name and User ID
                setUserName(data.data.name)
                setuserID(data.data.userId)

                //Set BirthDate
                const dateStr = data.data.birthDate
                setDOB(dateStr)

                //Set the date of Admit
                var date = new Date(data.data.admiteDate);
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var formattedDate = year + '-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2, '0');
                setdateOfAdmit(formattedDate)

                //Calculate the age and set the age
                var currentYear = new Date().getFullYear();  //Take current Year
                var parts = dateStr.split("/");
                var birthYear = parseInt(parts[2], 10);  //Extract the birth Year
                var ageCalc = currentYear - birthYear
                setAge(ageCalc)

                //Set the allergies and wards
                setAllergies(data.data.allergics)

                //Set the discharge status
                if (data.data.discharged) {
                    setisDischarged("Yes")
                }
                else {
                    setisDischarged("No")
                }

            } catch (error) {
                console.log(error);
                console.log("fetch err");
            }
        };
        fetchData();
    }, []);



    const getTempColour = () => {
        if (36 <= bodyTemperature && bodyTemperature <= 38) {
            return "#4f3"
        }
        return "#f47"
    }

    const getTempStatus = () => {
        if (36 <= bodyTemperature && bodyTemperature <= 38) {
            return "Normal"
        }
        return "Severe"
    }

    const getSugarColour = () => {
        if (70 < sugarLevel && sugarLevel < 100) {
            return "#4f3"
        }
        return "#f47"
    }

    const getSugarStatus = () => {
        if (70 < sugarLevel && sugarLevel < 100) {
            return "Normal"
        }
        return "Severe"
    }

    const getPressureColour = () => {
        if (bloodPressure < 80) {
            return "#4f3"
        }
        return "#f47"
    }

    const getBloodStatus = () => {
        if (bloodPressure < 80) {
            return "Normal"
        }
        return "Severe"
    }

    return (
        <>
            <PatientSidebar isMobile={isMobile} />
            <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2 text-black`}>
                {/* Section 1 - Dashboard Heading */}
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-500 to-blue-900 text-white p-4 shadow text-2xl" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                    <h1 className="font-bold pl-2 ">Dashboard</h1>
                </div>

                {/* Section 2 - User Detail Section */}
                <div className="bg-slate-300 p-6">
                    <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <AiOutlineUserAdd size={30} />
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Patient Name</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900"> {userName} </h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    User ID: {userID}
                                </p>
                            </div>
                        </div>

                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <LiaBirthdayCakeSolid size={30} />
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Age</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900"> {age} </h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    Date Of Birth: {dob}
                                </p>
                            </div>
                        </div>

                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <BsHospital size={30} />
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Date Admitted</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900"> {dateOfAdmit} </h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    Ward Number: {ward}
                                </p>
                            </div>
                        </div>

                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <LiaAllergiesSolid size={30} />
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Allergies</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{Allergies}</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    Is Discharged: {isDischarged}
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* User Detail Section Ends*/}

                    {/*Section 3:  Body Temp, Sugar Level, Blood Pressure */}
                    <div className="flex flex-wrap justify-center ">
                        {/* Body Temperature */}
                        <div className="ml-5 mr-5 max-w-sm mb-5">
                            <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">
                                {/* Heading section */}
                                <div className="flex items-center mb-3">
                                    <span style={{ fontSize: 30, fontFamily: "monospace" }} >Body Temperature °C</span>
                                </div>
                                {/* Content Here */}
                                <div className="pl-5 flex flex-col  flex-grow">
                                    <div className='justify-between pb-5'>
                                        <CircularProgressBar color={getTempColour()} value={bodyTemperature} />
                                    </div>
                                    <span style={{ fontSize: 20 }}>Condition: {getTempStatus()}</span>
                                    <span style={{ fontSize: 20 }}>Accepted Level: 36.1°C to 37.2°C</span>
                                </div>
                            </div>
                        </div>

                        {/* Sugar Level */}
                        <div className=" ml-5 mr-5 max-w-sm mb-5">
                            <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">
                                <div className="flex items-center mb-3">
                                    <span style={{ fontSize: 30, fontFamily: "monospace" }}> Sugar Level mg/dL</span>
                                </div>
                                <div className="pl-5 flex flex-col  flex-grow">

                                    <div className='justify-between pb-5'>
                                        <CircularProgressBar color={getSugarColour()} value={sugarLevel} />
                                    </div>
                                    <span style={{ fontSize: 20 }}>Condition: {getSugarStatus()}</span>
                                    <span style={{ fontSize: 20 }}>Accepted Level: 70mg/dL to 100mg/dL</span>
                                </div>
                            </div>
                        </div>
                        {/* Blood Pressure */}
                        <div className=" ml-5 mr-5 max-w-sm mb-5">
                            <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">

                                <div className="flex items-center mb-3">
                                    <span style={{ fontSize: 30, fontFamily: "monospace" }}> Blood Pressure mmHg </span>
                                </div>

                                <div className="pl-5 flex flex-col  flex-grow">
                                    <div className='justify-between pb-5'>
                                        <CircularProgressBar color={getPressureColour()} value={bloodPressure} />
                                    </div>
                                    <span style={{ fontSize: 20 }}>Condition:{getBloodStatus()}</span>
                                    <span style={{ fontSize: 20 }}>Accepted Level: Less than 80mmHg</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>






            </div>
        </>
    );
}

export default PatientDashboard;