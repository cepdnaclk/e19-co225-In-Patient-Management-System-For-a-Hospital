import React, { useState } from 'react';
import CircularProgressBar from '../widgets/circularProgress';

function DisplayDashboard() {

    return (
    <React.Fragment>
     
    {/* Top Heading */}
    <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={ { borderTopLeftRadius:"8px", borderTopRightRadius:"8px" } }>
        <h1 className="font-bold pl-2"> Dashboard </h1>
    </div>

    <div className="bg-slate-300 p-6">
        {/* Top 4 User detail display */}
        <div className="mb-12  grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            {/* item1 */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                    </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                    </svg>
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

            {/* Item3 */}
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" class="bi bi-calendar3" viewBox="0 0 16 16">
                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                        <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z"></path>
                    </svg>
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
        {/* Top 4 User detail display ENDS !!!!*/}

        {/* Body Temp, Sugar Level, Blood Pressure */}
            <div className="flex flex-wrap justify-center ">
                {/* Body Temperature */}
                <div className="ml-5 mr-5 max-w-sm">
                    <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">
                        {/* Heading section */}
                        <div className="flex items-center mb-3">
                            <span style={{ fontSize: 30, fontFamily:"monospace" }} >Body Temperature</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fcad03" class="bi bi-thermometer-half" viewBox="0 0 16 16">
                                <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
                                <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
                            </svg>
                        </div>
                        {/* Content Here */}
                        <div className="pl-5 flex flex-col  flex-grow">
                            <div className='justify-between pb-5'>
                                <CircularProgressBar color={"red"} value={50}/>
                            </div>
                        <span style={{fontSize:20}}>Condition:</span>
                        <span style={{fontSize:20}}>Accepted Level:</span>
                        <span style={{fontSize:20}}>Any other:</span>
                        </div>
                    </div>    
                </div>

                {/* Sugar Level */}
                <div className=" ml-5 mr-5 max-w-sm">
                    <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">
                        <div className="flex items-center mb-3">
                            <span style={{ fontSize: 30, fontFamily:"monospace" }}> Sugar Level</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fc3503" class="bi bi-droplet" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                                <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
                            </svg>
                        </div>
                        <div className="pl-5 flex flex-col  flex-grow">
                            <div className='justify-between pb-5'>
                                <CircularProgressBar color={"blue"} value={70}/>
                            </div>
                        <span style={{fontSize:20}}>Condition:</span>
                        <span style={{fontSize:20}}>Accepted Level:</span>
                        <span style={{fontSize:20}}>Any other:</span>
                        </div>
                    </div>    
                </div>                
                {/* Blood Pressure */}
                <div className=" ml-5 mr-5 max-w-sm">
                    <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">

                        <div className="flex items-center mb-3">
                            <span style={{ fontSize: 30, fontFamily:"monospace" }}> Blood Pressure </span>
                        </div>

                        <div className="pl-5 flex flex-col  flex-grow">
                            <div className='justify-between pb-5'>
                                <CircularProgressBar color={"#5b3"} value={20}/>
                            </div>
                        <span style={{fontSize:20}}>Condition:</span>
                        <span style={{fontSize:20}}>Accepted Level:</span>
                        <span style={{fontSize:20}}>Any other:</span>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        {/* Body Temp, Sugar Level, Blood Pressure ENDS !!!!*/}


 


</React.Fragment>
    );
}
export default DisplayDashboard;