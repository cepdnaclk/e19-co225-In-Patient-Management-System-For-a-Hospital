import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:9081/admin/staff";
const EMPLOYEE_DOCTORS_API_BASE_URL = "http://localhost:9081/admin/doctors";
const ADMIN_API_BASE_URL = "http://localhost:9081/admin";
class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  getDoctors(){
    return axios.get(EMPLOYEE_DOCTORS_API_BASE_URL)
  }
  getNurses(){
    return axios.get(ADMIN_API_BASE_URL+"/nurses")
  }

  getClerks(){
    return axios.get(ADMIN_API_BASE_URL+"/clerks")
  }
  getCount(){
    return axios.get(ADMIN_API_BASE_URL+"/staffCount")
  }
  getadmitData(){
    return axios.get(ADMIN_API_BASE_URL+"/admitData")
  }
  getaWardData(){
    return axios.get(ADMIN_API_BASE_URL+"/ward")
  }

}

export default new EmployeeService();