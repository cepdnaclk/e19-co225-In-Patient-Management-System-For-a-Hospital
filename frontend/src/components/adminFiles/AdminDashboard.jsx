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
  const [admitData,setAdmitData] = useState([
    {
        "id": 1,
        "data": []
    }
]);
const [admit,setAdmit] = useState([
]);
const [graphx,setGraphx] = useState([]);
const [graphy,setGraphy] = useState([]);

const [xdata, setxdata] = useState([]);
const [ydata, setydata] = useState([]);
const [x,setX] = useState([
]);
const [y,setY] = useState([
]);
const [test, setTest] = useState([
    {
      id: "hours",
      data: [
        { y: "A", x: new Date("2019-05-29 04:00") },
        { y: "B", x: new Date("2019-05-30 02:00") },
      ]
    }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
         const response = await EmployeeService.getCount();
        const response_graph = await EmployeeService.getadmitData();
        setLoading(false);
        const date = response_graph.data.map(item => (new Date(item.x)).getDate());
        const count = response_graph.data.map(item => parseInt(item.y));
        setAdmit(response_graph.data);
        setCount(response.data);
        console.log(admit);
      const xValues = [];
      const yValues = [];
      const nData = [];

      response_graph.data.forEach(item => {
        const dateParts = item.x.split("T")[0].split("-");
        
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]); // Months are zero-based (0-11)
        const day = parseInt(dateParts[2]);
        console.log(dateParts);
        console.log([year, month,day])
        xValues.push(new Date(year, month, day).getDate());
        nData.push({y:parseInt(item.y),
           x: new Date(item.x)})
           //(new Date((year, month, day)))});
        yValues.push(parseInt(item.y));
      });
        console.log(date);
        console.log(nData)
        
    //     setX(prevX => [...prevX, ...xValues]);
    //   setY(prevY => [...prevY, ...yValues]);
    setX(xValues);
    setY(yValues);
      console.log(x);
      console.log(y);
      setTest([
        {
          id: "hours",
          data: nData
        }
      ]);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
        console.log("fetch err");
      }
   

      
      
      
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
        <Header title="DASHBOARD" subtitle="MEDnet Admin dashboard" />

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

{/* <LineChart
      xAxis={[
        {
          id: 'Years',
          data: years,
          scaleType: 'time',
          valueFormatter: (date) => date.getDate(),
        },
      ]}
      series={[
        {
          id: 'France',
          label: 'Number of active patients',
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
    /> */}
    <Box height={400}>
      <Linearchart data={test}/>
      </Box>


      </Box>


      </div>
      </div>
    </>
  );
};
export default AdminDashboard;