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
import Linearchart from "../linearchart";
import StatBox from '../StatBox';
import { GiStethoscope } from "react-icons/gi";
import EmployeeService from "../../services/EmployeeService";
import { LineChart } from '@mui/x-charts/LineChart';


function AdminDashboard(props) {
  const { isMobile } = props;
  const open = isMobile;
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState({

  });
  const [admitData,setAdmitData] = useState({
    "id":1,
    "data": {}
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

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        const response = await EmployeeService.getadmitData();
        setAdmitData({...admitData, "data":response.data})
      
        console.log(admitData);
      } catch (error) {
        console.log(error);
        console.log("fetch err");
      }
     
      
      
    };
    fetchData();
  }, []);

  const years = [
    new Date(1990, 0, 1),
    new Date(1991, 0, 1),
    new Date(1992, 0, 1),
    new Date(1993, 0, 1),
    new Date(1994, 0, 1),
    new Date(1995, 0, 1),
    new Date(1996, 0, 1),
    new Date(1997, 0, 1),
    new Date(1998, 0, 1),
    new Date(1999, 0, 1),
    new Date(2000, 0, 1),
    new Date(2001, 0, 1),
    new Date(2002, 0, 1),
    new Date(2003, 0, 1),
    new Date(2004, 0, 1),
    new Date(2005, 0, 1),
    new Date(2006, 0, 1),
    new Date(2007, 0, 1),
    new Date(2008, 0, 1),
    new Date(2009, 0, 1),
    new Date(2010, 0, 1),
    new Date(2011, 0, 1),
    new Date(2012, 0, 1),
    new Date(2013, 0, 1),
    new Date(2014, 0, 1),
    new Date(2015, 0, 1),
    new Date(2016, 0, 1),
    new Date(2017, 0, 1),
    new Date(2018, 0, 1),
  ];

  const data = [
    {
      "id": "japan",
      "color": "hsl(63, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 290
        },
        {
          "x": "helicopter",
          "y": 41
        },
        {
          "x": "boat",
          "y": 54
        },
        {
          "x": "train",
          "y": 63
        },
        {
          "x": "subway",
          "y": 214
        },
        {
          "x": "bus",
          "y": 44
        },
        {
          "x": "car",
          "y": 221
        },
        {
          "x": "moto",
          "y": 211
        },
        {
          "x": "bicycle",
          "y": 71
        },
        {
          "x": "horse",
          "y": 107
        },
        {
          "x": "skateboard",
          "y": 251
        },
        {
          "x": "others",
          "y": 187
        }
      ]
    },
    
  ];
  
  const FranceGDPperCapita = [
    28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807,
    31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03, 35093.824,
    35495.465, 36166.16, 36845.684, 36761.793, 35534.926, 36086.727, 36691, 36571,
    36632, 36527, 36827, 37124, 37895, 38515.918,
  ];
  
  
  


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

<LineChart
      xAxis={[
        {
          id: 'Years',
          data: years,
          scaleType: 'time',
          valueFormatter: (date) => date.getFullYear(),
        },
      ]}
      series={[
        {
          id: 'France',
          label: 'French GDP per capita',
          data: FranceGDPperCapita,
          stack: 'total',
          area: false,
        },
        
      ]}
      sx={{
        '--ChartsLegend-itemWidth': '200px',
      }}
      width={800}
      height={400}
      margin={{ left: 70 }}
    />
    <Box height={500}>
      <Linearchart data={data}/>
      </Box>


      </Box>


      </div>
      </div>
    </>
  );
};
export default AdminDashboard;