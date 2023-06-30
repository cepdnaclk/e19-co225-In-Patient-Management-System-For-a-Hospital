
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import { DataGrid } from '@mui/x-data-grid';

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
    { field: 'id', headerName: 'Doctor id', width: 80},

    { field: 'name', headerName: 'name', width: 200},
    { field: 'userName', headerName: 'user name', width: 200 },
    { field: 'email', headerName: 'email', width: 200},
    {field: 'wardNo', headerName: 'ward no', width: 100 },
    {field: 'nic', headerName: 'NIC', width: 200 },
    {field: 'birthDate', headerName: 'Birth date', width: 160 },
  ];

  return (
    // <div className="flex max-w-2xl mx-auto shadow border-b ">
    <div className= {` ${open ? " w-[calc(100%-288px)]" : " w-[calc(100%-40px)]"} " w-full mx-auto shadow border-b"`}>
      <DataGrid rows={employees} columns={columns} getRowId={(row)=>row.id}/>
    
    </div>
  )
}

export default DoctorsTable