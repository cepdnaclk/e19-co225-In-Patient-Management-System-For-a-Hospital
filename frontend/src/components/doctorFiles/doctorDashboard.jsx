import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DoctorSidebar from './doctorSidebar';
import { AiOutlineUserAdd, AiOutlineMessage, AiOutlineBell, AiOutlineCalendar } from 'react-icons/ai';

function DoctorDashboard(props) {
  const { isMobile } = props;
  const open = isMobile;
  const totalPatients = 20;
  const totalMeetings = 3;
  const [profilePicture, setProfilePicture] = useState(null);
  const [isOnDuty, setIsOnDuty] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [calendarNotes, setCalendarNotes] = useState({});

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setProfilePicture(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleMessageAdmin = () => {
    console.log('Message to administration');
  };

  const handleViewNotifications = () => {
    console.log('View notifications');
  };

  const toggleDutyStatus = () => {
    setIsOnDuty(!isOnDuty);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleAddNote = (date) => {
    const note = prompt('Enter a note:');
    if (note) {
      setCalendarNotes((prevNotes) => ({
        ...prevNotes,
        [date.toDateString()]: note,
      }));
    }
  };

  const getCalendarTileContent = ({ date }) => {
    const note = calendarNotes[date.toDateString()];
    return note ? <div className="text-red-500">*</div> : null;
  };

  const getCalendarTileClassName = ({ date }) => {
    const note = calendarNotes[date.toDateString()];
    return note ? 'bg-blue-200' : null;
  };

  return (
    <>
      <DoctorSidebar isMobile={isMobile} />

      <div className={` ${open ? 'left-72 w-[calc(100%-288px)]' : 'left-20 w-[calc(100%-80px)]'} absolute p-2 text-black`}>

        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}>
          <h1 className="font-bold pl-2">Dashboard</h1>
        </div>

        <div className="bg-slate-300 p-6">
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
              <label htmlFor="profilePictureUpload" className="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-8 grid h-32 w-32 place-items-center cursor-pointer">
                {profilePicture ? (
                  <img src={profilePicture} alt="Profile" className="object-cover w-30 h-30 rounded-full" />
                ) : (
                  <AiOutlineUserAdd size={50} />
                )}
              </label>
              <input id="profilePictureUpload" type="file" accept="image/*" onChange={handleProfilePictureChange} className="hidden" />
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Doctor Name</p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">John Doe</h4>
              </div>
              <div className="border-t border-blue-gray-50 p-4">
                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">Any Detail Here</p>
              </div>
            </div>
          </div>


          <div className="bg-gray-100 p-6">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                  <div className="flex flex-row items-center">
                    <div className="flex-shrink pr-4">
                      <div className="rounded-full p-5 bg-green-600">{/* image here */}</div>
                    </div>
                    <div className="flex-1 text-right md:text-center">
                      <h2 className="font-bold uppercase text-gray-600">Total Appointments</h2>
                      <p className="font-bold text-3xl">{totalPatients}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-gradient-to-b from-yellow-600 to-purple-400 border-b-4 border-blue-800 rounded-lg shadow-xl p-5">
                  <div className="flex flex-row items-center">
                    <div className="flex-shrink pr-4">
                      <div className="rounded-full p-5 bg-purple-800">{/* image here */}</div>
                    </div>
                    <div className="flex-1 text-right md:text-center">
                      <h2 className="font-bold uppercase text-gray-600">Staff Meetings</h2>
                      <p className="font-bold text-3xl">{totalMeetings}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6">
            <div className="flex justify-center space-x-4">
              <button
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-purple-200 border border-gray-300 rounded-md hover:bg-purple-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                onClick={handleMessageAdmin}
              >
                <AiOutlineMessage className="mr-2" /> Message Administration
              </button>
              <button
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-yellow-200 border border-gray-300 rounded-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                onClick={handleViewNotifications}
              >
                <AiOutlineBell className="mr-2" /> View Notifications
              </button>
              <button
                className={`flex items-center px-4 py-2 text-sm font-medium rounded-md focus:outline-none ${isOnDuty ? 'bg-red-300 hover:bg-red-400 text-red-800' : 'bg-green-300 hover:bg-green-400 text-green-800'}`}
                onClick={toggleDutyStatus}
              >
                {isOnDuty ? (
                  <>
                    <AiOutlineCalendar className="mr-2" /> Off Duty
                  </>
                ) : (
                  <>
                    <AiOutlineCalendar className="mr-2" /> On Duty
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="bg-white p-6 mt-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Calendar</h2>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                onClick={() => handleAddNote(selectedDate)}
              >
                Add Note
              </button>
            </div>
            <Calendar
              value={selectedDate}
              onChange={handleDateChange}
              tileContent={getCalendarTileContent}
              tileClassName={getCalendarTileClassName}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DoctorDashboard;
