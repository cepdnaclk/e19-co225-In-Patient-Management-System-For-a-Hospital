import React from 'react';
import PatientSidebar from './patientSidebar';
import CircularProgressBar from "../widgets/circularProgress"

import { AiOutlineUserAdd } from "react-icons/ai";

function PatientDashboard(props) {
    const { isMobile } = props;
    const open = isMobile;
    return (
        <>
            <PatientSidebar isMobile={isMobile} />
            <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`}>
                {/* Section 1 - Dashboard Heading */}
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-500 to-blue-900 text-white p-4 shadow text-2xl" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                    <h1 className="font-bold pl-2">Dashboard</h1>
                </div>


                {/* Section 2 - User Detail Section */}
                <div className="bg-slate-300 p-6">
                    <div className="mb-12  grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                        {/* item1 */}
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <AiOutlineUserAdd size={30} />
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Patient Name</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">John Doe</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    Any Detail Here
                                </p>
                            </div>
                        </div>

                        {/* item2 */}
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">


                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">text1</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">subtext1</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    Any Detail Here
                                </p>
                            </div>
                        </div>

                        {/* item1 */}
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">


                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Date Admitted</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">2023/05/04</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    Any Detail Here
                                </p>
                            </div>
                        </div>

                        {/* Item 04 */}
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">


                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Status</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">Subtext2</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    Any Detail Here
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* User Detail Section Ends*/}

                    {/*Section 3:  Body Temp, Sugar Level, Blood Pressure */}
                    <div className="flex flex-wrap justify-center ">
                        {/* Body Temperature */}
                        <div className="ml-5 mr-5 max-w-sm">
                            <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">
                                {/* Heading section */}
                                <div className="flex items-center mb-3">
                                    <span style={{ fontSize: 30, fontFamily: "monospace" }} >Body Temperature</span>
                                </div>
                                {/* Content Here */}
                                <div className="pl-5 flex flex-col  flex-grow">
                                    <div className='justify-between pb-5'>
                                        <CircularProgressBar color={"red"} value={50} />
                                    </div>
                                    <span style={{ fontSize: 20 }}>Condition:</span>
                                    <span style={{ fontSize: 20 }}>Accepted Level:</span>
                                    <span style={{ fontSize: 20 }}>Any other:</span>
                                </div>
                            </div>
                        </div>

                        {/* Sugar Level */}
                        <div className=" ml-5 mr-5 max-w-sm">
                            <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">
                                <div className="flex items-center mb-3">
                                    <span style={{ fontSize: 30, fontFamily: "monospace" }}> Sugar Level</span>
                                </div>
                                <div className="pl-5 flex flex-col  flex-grow">
                                    <div className='justify-between pb-5'>
                                        <CircularProgressBar color={"blue"} value={70} />
                                    </div>
                                    <span style={{ fontSize: 20 }}>Condition:</span>
                                    <span style={{ fontSize: 20 }}>Accepted Level:</span>
                                    <span style={{ fontSize: 20 }}>Any other:</span>
                                </div>
                            </div>
                        </div>
                        {/* Blood Pressure */}
                        <div className=" ml-5 mr-5 max-w-sm">
                            <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">

                                <div className="flex items-center mb-3">
                                    <span style={{ fontSize: 30, fontFamily: "monospace" }}> Blood Pressure </span>
                                </div>

                                <div className="pl-5 flex flex-col  flex-grow">
                                    <div className='justify-between pb-5'>
                                        <CircularProgressBar color={"#5b3"} value={20} />
                                    </div>
                                    <span style={{ fontSize: 20 }}>Condition:</span>
                                    <span style={{ fontSize: 20 }}>Accepted Level:</span>
                                    <span style={{ fontSize: 20 }}>Any other:</span>
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