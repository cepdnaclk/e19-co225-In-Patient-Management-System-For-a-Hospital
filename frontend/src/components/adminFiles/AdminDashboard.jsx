import React, { useState } from 'react';
import Navbar from "./Navbar";
import Doctors from "./DoctorsTable";
import AdminSideBar from "./AdminsideBar";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from '../Header';


function AdminDashboard(props) {
  const { isMobile } = props;
  const open = isMobile;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


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
      </Box>


      </div>
      </div>
    </>
  );
};
export default AdminDashboard;