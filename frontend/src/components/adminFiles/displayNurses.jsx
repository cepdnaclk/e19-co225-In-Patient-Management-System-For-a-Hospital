import React, {useState} from 'react';
import Nurse from './singleItems/singleNurse';
import Adminsidebar from './AdminSideBar';

function AdminNurses(props) {
        const { isMobile } = props;
        const open = isMobile;
        const [nurses, setNurses] = useState([
          {
            id: 1,
            name: 'Ms.Marry',
            description: 'Works in Emergency Care Unit',
            imgLocation: "https://img.freepik.com/free-photo/covid19-healthcare-workers-pandemic-concept-confident-smiling-asian-nurse-scrubs-standing-selfassured-cross-arms-chest-professional-doctor-ready-surgery-standing-white-background_1258-107804.jpg?w=1060&t=st=1688072907~exp=1688073507~hmac=9d48bdcc7e8802f13fcb343d6b29f3821f14616d17205c102e4bf884c728ad4e",
          },
          {
            id: 2,
            name: 'Ms.Anne Miller',
            description: 'Works in Peadiatric Ward',
            imgLocation: "https://img.freepik.com/premium-photo/portrait-beautiful-asian-nurse-posing_1258-35283.jpg?w=1060",
          },
          {
            id: 3,
            name: 'Mr.Mike Smith ',
            description: 'Works in Gyn-Obs ward',
            imgLocation: "https://www.abstaffing.com/wp-content/uploads/2021/06/correctional-health-jobs.jpg",
          },
          {
            id: 4,
            name: 'Ms.Julie Green',
            description: 'Works in Eye ward',
            imgLocation: "https://as1.ftcdn.net/v2/jpg/02/71/20/96/1000_F_271209626_iaDHmcN0MFUNYhnne1m51qPS2ta8Wc25.jpg",
          },
          // Add more nurses here if needed
        ]);

    return (
      <>
      <Adminsidebar isMobile={isMobile} />
      <div className={` ${open ? "left-72 w-[calc(100%-288px)]" : "left-20 w-[calc(100%-80px)]"} absolute p-2`} style={{ backgroundColor: "red", }}>
        <div className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white" style={{ borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }}>
          <h1 className="font-bold pl-2"> Nurses </h1>
        </div>

        <div className="bg-gray-100 p-6">
          <h1>Under Construction</h1>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 justify-center">

              <Nurse nurses={nurses} />
            </div>
          </div>
        </div>
      </div>
    </>
    );
}

export default AdminNurses;
