import { Box, Button, TextField, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import EmployeeService from "../../services/EmployeeService";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
     EmployeeService.saveEmployee(values)
      .then((response) => {
        console.log(response);
        values = initialValues;
      })
      .catch((error) => {
        console.log("Error detected:", error);
      })
  };
  const roleOptions = [
    { label: "Doctor", value: "ROLE_DOCTOR" },
    { label: "Nurse", value: "ROLE_NURSE" },
    { label: "Clerk", value: "ROLE_CLERKE" },
   
    
  ];

  return (
    <Box m="20px">
      <Header title="ADD TO STAFF" subtitle="Add new medical offficer" />

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
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                name="name"
                error={touched.name && errors.name}
                helperText={touched.name && errors.name}
                sx={{ gridColumn: "span 2" }}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="User Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.userName}
                name="userName"
                error={touched.userName && errors.userName}
                helperText={touched.userName && errors.userName}
                sx={{ gridColumn: "span 2" }}
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
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={touched.email && errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="National Identify Card number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.nic}
                name="nic"
                error={touched.nic && errors.nic}
                helperText={touched.nic && errors.nic}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
              fullWidth
              variant="filled"
            //   type="text"
            select
              label="Roles"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.roles}
              name="roles"
              error={touched.roles && !!errors.roles}
              helperText={touched.roles && errors.roles}
              sx={{ gridColumn: "span 2" }}
              >
                {/* {roleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
             */}
             <MenuItem value="">Select Role</MenuItem>
  {roleOptions.map((option) => (
    <MenuItem key={option.value} value={option.value}>
      {option.label}
    </MenuItem>
  ))}
        
              </TextField>
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Ward number(2-12)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.wardNo}
                name="wardNo"
                error={touched.wardNo && errors.wardNo}
                helperText={touched.wardNo && errors.wardNo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Birth Date"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.birthDate}
                name="birthDate"
                error={touched.birthDate && errors.birthDate}
                helperText={touched.birthDate && errors.birthDate}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    userName: yup.string().required("User Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    wardNo: yup.number().required("Ward is required").max(12, "Ward number must be at most 12"),
    birthDate: yup.string().required("Birth date is required"),
    roles: yup.string().required("Roles is required"),
    nic: yup.string().required("NIC is required"),
    
 
  
});
const initialValues = {
    name: "",
    userName: "",
    password: "",
    email: "",
    roles: "",
    nic: "",
    wardNo: "",
    birthDate: ""
};

export default Form;