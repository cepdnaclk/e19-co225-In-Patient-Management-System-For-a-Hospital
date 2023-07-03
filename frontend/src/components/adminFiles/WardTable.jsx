
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Header from '../Header';

const DoctorsTable = (props) => {
  const { isMobile } = props;
  const open = isMobile;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getaWardData();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
        console.log("fetch err");
      }
      setLoading(false);
      
      
    };
    fetchData();
  }, []);

  
  
  const columns = [
    { field: 'id',
     headerName: 'Ward number',
      width: 120,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',},

    { 
      field: 'type',
       headerName: 'Description', 
       width: 200,
       headerClassName: 'super-app-theme--header',
       headerAlign: 'center',
    },
    { field: 'doctorCount',
     headerName: 'No. of doctors', 
     width: 200,
     headerClassName: 'super-app-theme--header',
     
     },
    { field: 'nurseCount',
     headerName: 'No.of Nurses',
      width: 200,
      headerClassName: 'super-app-theme--header',
      },
    {field: 'patientCount',
     headerName: 'No.of patients', 
     flex: 1,
     headerClassName: 'super-app-theme--header',
     },
    
  ];
  

  return (
    // <div className="flex max-w-2xl mx-auto shadow border-b ">
    <div className= {` ${open ? " w-[calc(100%-288px)]" : " w-[calc(100%-40px)]"} " w-full mx-auto shadow border-b"`}>
           {/* <Box sx={{ textAlign: 'left', m: 1,  fontSize: '35px', color: '#eeeeee', fontWeight: 'bold' }}>DOCTORS</Box> */}
           <Header title={"WARDS"} subtitle={""}/>
           
      <Box
      sx={{
        height: 600,
        width: '100%',
        marginTop: '20px',
        '& .super-app-theme--header': {
          backgroundColor: '#00695c',
        },
      }}
    >
      <DataGrid rows={employees} columns={columns} getRowId={(row)=>row.id} loading= {loading}
      // sx={{
      //   boxShadow: 2,
      //   border: 2,
      //   borderColor: 'primary.light',
      //   '& .MuiDataGrid-cell:hover': {
      //     color: 'primary.main',
      //     '& .super-app-theme--header': {
      //       backgroundColor: 'rgba(255, 7, 0, 0.55)',
      //     }
      //   },
      // }}
      sx={{
        '& .MuiDataGrid-row': {
          bgcolor: grey[900],
          color: 'white',
          '&:hover': {
            bgcolor: grey[500], // Set hover background color to grey
          },
        },
      }}
      />
      </Box>
    
    </div>
  )
}

export default DoctorsTable