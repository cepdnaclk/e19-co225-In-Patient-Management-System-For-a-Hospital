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
  getCount(){
    return axios.get(ADMIN_API_BASE_URL+"/staffCount")
  }

}

export default new EmployeeService();