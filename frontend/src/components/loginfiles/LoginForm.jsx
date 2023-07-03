import { Box, Button, TextField, MenuItem, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import EmployeeService from "../../services/EmployeeService";
import { useState } from "react";
import UseAuth from '../hooks/UseAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import LoginService from "../../services/LoginService";


const LoginForm = () => {
    const { setAuth } = UseAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
  const isNonMobile = useMediaQuery("(min-width:600px)");
  
  const navigate = useNavigate();

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleFormSubmit = (values, {resetForm}) => {
    console.log(values);
    LoginService.login(values)

      .then((response) => {
        const accessToken = response.accessToken;
        const roles = response.roles;
        const id = response.id;
        setAuth({ "id": id, "roles": roles, "accessToken": accessToken });
        console.log(response);
        const currentURL = window.location.href;
        const parts = from.split("/");
        const login = parts[1];
        console.log(login);
        const convertedRole = roles.substring(5).toLowerCase();
        const capitalRole = convertedRole.charAt(0).toUpperCase() + convertedRole.slice(1);
        console.log(convertedRole);
        if (convertedRole!=login){
            setErrorMessage(capitalRole+" dont have acces to "+login+" content");
          
        }
        else{

        navigate(from, { replace: true });
        }
        
      })
      .catch((error) => {
        console.log("Error detected:", error);
        setErrorMessage("Invalid login");
      })
      resetForm();
  };
  
  return (
    <Box m="20px">
      <Header title="" subtitle="Login" />
      
        {errorMessage && (
        <Box mt="50px">
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        </Box>
      )}


      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="User Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={touched.userName && errors.userName}
                helperText={touched.userName && errors.userName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={touched.password && errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
              
              
              
              
              
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
            
                Login
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};


const checkoutSchema = yup.object().shape({
    username: yup.string().required("User Name is required"),
    password: yup.string().required("Password is required"),
 
  
});
const initialValues = {
   
    username: "",
    password: "",
    
};

export default LoginForm;