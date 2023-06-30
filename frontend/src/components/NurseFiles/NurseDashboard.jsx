import React from 'react';
import NurseSidebar from './nurseSidebar';

import { AiOutlineUserAdd } from "react-icons/ai";

function NurseDashboard(props) {
    const { isMobile } = props;
    const open = isMobile;
    const totalPatients = 20;
    return (
        <>
            <NurseSidebar isMobile={isMobile} />
            <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`} style={{ backgroundColor: "red" }}>
                {/* Section 1 - Dashboard Heading */}
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                    <h1 className="font-bold pl-2"> Dashboard </h1>
                </div>

                {/* Section 2 - User Detail Section */}
                <div className="bg-slate-300 p-6">
                    <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
                        {/* item1 */}
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <AiOutlineUserAdd size={30} />
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Nurse Name</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">John Doe</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    Any Detail Here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100 p-6">
                    {/* Doctors, Nurse, User count */}
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                            <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                                <div className="flex flex-row items-center">
                                    <div className="flex-shrink pr-4">
                                        <div className="rounded-full p-5 bg-green-600">
                                            {/* image here */}
                                        </div>
                                    </div>
                                    <div className="flex-1 text-right md:text-center">
                                        <h2 className="font-bold uppercase text-gray-600">Total Patients to be watched</h2>
                                        <p className="font-bold text-3xl">{totalPatients}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NurseDashboard;
