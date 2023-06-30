
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";
import { DataGrid } from '@mui/x-data-grid';

const DoctorsTable = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

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
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns = [
    { field: 'col1', headerName: 'name', width: 150 },
    { field: 'col2', headerName: 'user name', width: 150 },
    { field: 'col2', headerName: 'email', width: 150 },
    {field: 'col2', headerName: 'ward no', width: 150 },
    {field: 'col2', headerName: 'NIC', width: 150 },
    {field: 'col2', headerName: 'Birth date', width: 150 },
  ];

  return (
    // <div className="flex max-w-2xl mx-auto shadow border-b ">
    <div className="flex w-full max-w-4xl mx-auto shadow border-b">
      <DataGrid rows={rows} columns={columns}/>
    
    </div>
  )
}

export default DoctorsTable