import React from 'react';
import { useNavigate } from "react-router-dom";

import { AiFillDashboard } from "react-icons/ai";
import { FaHandHoldingMedical } from "react-icons/fa";
import { CgProfile } from "react-icons/Cg";


function NurseSidebar(props) {
    const { isMobile } = props;
    const navigate = useNavigate();
    const Menus = [
        { title: "Dashboard", src: <AiFillDashboard size={30} />, path: "/nurse/dashboard" },
        { title: "Profile", src: <CgProfile size={30} />, path: "/nurse/profile" },
//         { title: "Patients", src: <CgProfile size={30} />, path: "/doctor/patients" },
    ];

    const navigateDashBoard = (e, path) => {
        e.preventDefault();
        navigate(path);
    }

    const open = isMobile;
    return (
        <>
            <div className={` ${open ? "w-72" : "w-20 "} bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black h-screen p-5  pt-8 duration-300 fixed`}>
                <div className="flex gap-x-7 items-center">
                    <FaHandHoldingMedical size={55} color="#e0e7ff" />
                    <h1 className={`text-white origin-left font-large font-serif italic text-xl duration-200 ${!open && "scale-0"}`}>MEDNET</h1>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li key={index} onClick={(e, path) => navigateDashBoard(e, Menu.path)} className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"}  `}>
                            <span>{Menu.src}</span>
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                <span>{Menu.title}</span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default NurseSidebar;