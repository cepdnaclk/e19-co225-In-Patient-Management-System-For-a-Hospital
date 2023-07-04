import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillDashboard } from 'react-icons/ai';
import { FaHandHoldingMedical } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

function NurseSidebar(props) {
  const { isMobile } = props;
  const navigate = useNavigate();

  const Menus = [
    { title: 'Dashboard', icon: <AiFillDashboard size={20} />, path: '/nurse/dashboard' },
    { title: 'Profile', icon: <CgProfile size={20} />, path: '/nurse/profile' },
    // { title: 'Patients', icon: <CgProfile size={20} />, path: '/doctor/patients' },
  ];

  const navigateTo = (path) => {
    navigate(path);
  };

  const open = isMobile;

  return (
    <div className={`${open ? 'w-72' : 'w-20'} bg-gray-900 h-screen p-5 pt-8 fixed duration-300`}>
      <div className="flex items-center mb-6">
        <FaHandHoldingMedical size={40} color="#e0e7ff" />
        <h1 className={`text-white ml-2 font-large font-serif italic text-xl duration-200 ${!open && 'scale-0'}`}>MEDNET</h1>
      </div>
      <ul>
        {Menus.map((menu, index) => (
          <li
            key={index}
            onClick={() => navigateTo(menu.path)}
            className={`flex items-center py-2 cursor-pointer hover:bg-gray-800 transition-colors duration-200 ${menu.gap ? 'mt-9' : 'mt-2'}`}
          >
            <span className="mr-3">{menu.icon}</span>
            <span className={`${!open && 'hidden'} text-white text-sm`}>{menu.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NurseSidebar;
