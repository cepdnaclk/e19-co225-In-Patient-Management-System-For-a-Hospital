import React, { useState } from 'react';
import CircularProgressBar from '../widgets/circularProgress';

function DisplayDashboard() {

    return (
    <React.Fragment>
     
        {/* Top Heading */}
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={ { borderTopLeftRadius:"8px", borderTopRightRadius:"8px" } }>
        <h1 className="font-bold pl-2"> Dashboard </h1>
        </div>

        <div className="bg-slate-300 p-5">
            <div className="flex flex-wrap justify-center ">
                {/* card 1 */}
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

                {/* card 1 */}
                <div className=" ml-5 mr-5 max-w-sm">
                    <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">

                        {/* Heading section */}
                        <div className="flex items-center mb-3">
                            <span style={{ fontSize: 30, fontFamily:"monospace" }} >Sugar Level</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#fc3503" class="bi bi-droplet" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z"/>
                                <path fill-rule="evenodd" d="M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z"/>
                            </svg>
                        </div>

                        {/* Content Here */}
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

                {/* card 1 */}
                <div className=" ml-5 mr-5 max-w-sm">
                    <div className="pt-5 pl-5 pr-10 pb-10 flex rounded-lg h-full bg-white flex-col">

                        <div className="flex items-center mb-3">
                            <span style={{ fontSize: 30, fontFamily:"monospace" }} >Blood Pressure</span>
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



</React.Fragment>
    );
}

export default DisplayDashboard;





