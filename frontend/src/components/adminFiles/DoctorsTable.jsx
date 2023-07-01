
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
//import { DataGrid } from '@mui/x-data-grid';
//import { styled } from '@mui/material/styles';
//import { grey } from '@mui/material/colors';
//import Box from '@mui/material/Box';

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
        const response = await EmployeeService.getDoctors();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
        console.log("fetch err");
      }
      setLoading(false);
      
      
    };
    fetchData();
  }, []);

  const rows = [
    { id: 1, col1: 'Hello', col2: 'Worldbhhhhhhhhhhhhhhhhhhhhhhh' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns = [
    { field: 'id',
     headerName: 'Doctor id',
      width: 80,
      headerClassName: 'super-app-theme--header',
      headerAlign: 'center',},

    { 
      field: 'name',
       headerName: 'name', 
       width: 200,
       headerClassName: 'super-app-theme--header',
       headerAlign: 'center',
    },
    { field: 'userName',
     headerName: 'user name', 
     width: 200,
     headerClassName: 'super-app-theme--header',
     
     },
    { field: 'email',
     headerName: 'email',
      width: 200,
      headerClassName: 'super-app-theme--header',
      },
    {field: 'wardNo',
     headerName: 'ward no', 
     width: 100,
     headerClassName: 'super-app-theme--header',
     },
    {field: 'nic', 
    headerName: 'NIC', 
    width: 200,
    headerClassName: 'super-app-theme--header',
    },
    {field: 'birthDate',
     headerName: 'Birth date', 
     flex:1,
     headerClassName: 'super-app-theme--header',
    },
  ];
  

  return (
    // <div className="flex max-w-2xl mx-auto shadow border-b ">
    <div className= {` ${open ? " w-[calc(100%-288px)]" : " w-[calc(100%-40px)]"} " w-full mx-auto shadow border-b"`}>
      <Box
      sx={{
        height: 500,
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: 'rgba(255, 7, 0, 0.55)',
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