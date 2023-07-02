import { MdPeopleAlt } from "react-icons/md"; 
import { CiReceipt } from "react-icons/ci"; 
import { TbNurse } from "react-icons/tb"; 
import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar";
import Doctors from "./DoctorsTable";
import AdminSideBar from "./AdminsideBar";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from '../Header';
import StatBox from '../StatBox';
import { GiStethoscope } from "react-icons/gi";
import EmployeeService from "../../services/EmployeeService";

function AdminDashboard(props) {
  const { isMobile } = props;
  const open = isMobile;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState({

  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getCount();
        setCount(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
        console.log("fetch err");
      }
      setLoading(false);
      
      
    };
    fetchData();
  }, []);



  return (
    <>
      <div className="flex">
        <AdminSideBar isMobile={isMobile}/>
        <div className={` ${{props} ? "left-72 w-[calc(100%-300px)]" : "left-20 w-[calc(100%-50px)]"} absolute p-2 m-2`}>
        <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

      </Box>


     {/* GRID & CHARTS */}
     <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={count.doctors}
            subtitle="DOCTORS"
            
            icon={
              <GiStethoscope size={30}
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={count.nurses}
            subtitle="Nurses"
            icon={
              <TbNurse size={30}
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={count.clerks}
            subtitle="Admission clerks"
            icon={
              <CiReceipt size={30}
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={count.patients}
            subtitle="Active patients"
            icon={
              <MdPeopleAlt size={30}
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
</Box>


      </Box>


      </div>
      </div>
    </>
  );
};
export default AdminDashboard;