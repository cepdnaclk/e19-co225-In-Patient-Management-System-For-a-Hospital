import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../../services/EmployeeService";

const AddStaffForm  = () => {
  const [employee, setEmployee] = useState({
    name: "",
    userName: "",
    password: "",
    email: "",
    roles: "",
    nic: "",
    wardNo: "",
    birthDate: ""
  });

  const navigaye = useNavigate();
  const [msg, setmsg] = useState("");
  const [msgVisible, setmsgVisible] = useState(false);
 

  const handleChange = (e) => {
    var value = e.target.value;
    if (e.target.name=="wardNo"){
        var intValue = parseInt(value, 10);
        if (!isNaN(intValue) && Number.isInteger(intValue)) {
            // The input value is a valid integer
            console.log("Input value is an integer");
            value = intValue;
          } else {
            // The input value is not an integer
            console.log("Input value is not an integer");
          }
    }
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    if(employee.wardNo<=1||employee.wardNo>15){
        setmsg("Invalid ward number");
        setmsgVisible(true);
        setTimeout(() => {
            setmsg("");
            setmsgVisible(false);      
        }, 1000);
        
    }else{
    reset(e);
    EmployeeService.saveEmployee(employee)
      .then((response) => {
        console.log(response);
        setmsg("Saved successfully");
        setmsgVisible(true);
       
        setTimeout(() => {
            setmsg("");
            setmsgVisible(false);
            
            
        }, 1000);
        
        
      })
      .catch((error) => {
        console.log("detected");
        setmsg("User with same user name exists");
        setmsgVisible(true);
       
        setTimeout(() => {
            setmsg("");
            setmsgVisible(false);
            
            
        }, 1500);
        
      });
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
        name: "",
        userName: "",
        password: "",
        email: "",
        roles: "",
        nic: "",
        wardNo: "",
        birthDate: ""
    });
  };

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className={`${!msgVisible && "hidden"} font-thin text-2xl tracking-wider`}>
          <h1>{msg}</h1>
        </div> 
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            value={employee.userName}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={employee.password}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            NIC
          </label>
          <input
            type="text"
            name="nic"
            value={employee.nic}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Role
          </label>
          <select className="h-10 w-96 border mt-2 px-2 py-2 block text-gray-600 text-sm font-normal" name="roles"  onChange={(e) => handleChange(e)}>
            <option  className="block text-gray-600 text-sm font-normal" value={"ROLE_DOCTOR"}>Doctor</option>
            <option  className="block text-gray-600 text-sm font-normal" value={"ROLE_CONSULTANT"}>Consultant</option>
            <option  className="block text-gray-600 text-sm font-normal" value={"ROLE_NURSE"}>Nurse</option>
            <option  className="block text-gray-600 text-sm font-normal" value={"ROLE_PHARMACIST"}>Pharmacist</option>
            <option  className="block text-gray-600 text-sm font-normal" value={"ROLE_CLERKE"}>Admission clerke</option>
          </select>
          
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Ward No
          </label>
          <input
            type="number"
            name="wardNo"
            min = "2" max = "12"
        
            value={employee.wardNo}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>

        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Birth Date
          </label>
          <input
            type="text"
            name="birthDate"
            value={employee.birthDate}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>




        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmployee}
            className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6">
            Save
          </button>
          <button
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStaffForm;