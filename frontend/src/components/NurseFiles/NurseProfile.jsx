import React from 'react';
import NurseSidebar from './nurseSidebar';

function NurseProfile(props) {
    const { isMobile } = props;
    const open = isMobile;
    return (
        <>
            <NurseSidebar isMobile={isMobile} />
            <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`}>
                <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
                    <h1 className="font-bold pl-2"> Profile </h1>
                </div>

                <div className="bg-gray-100 p-6">
                    {/* Content Here */}
                    <h1>Under Construction</h1>
                </div>
            </div>
        </>
    );
}

export default NurseProfile;