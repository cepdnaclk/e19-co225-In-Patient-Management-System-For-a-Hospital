import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:9081/admin/staff";
const EMPLOYEE_DOCTORS_API_BASE_URL = "http://localhost:9081/admin/doctors";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }
  getDoctors(){
    return axios.get(EMPLOYEE_DOCTORS_API_BASE_URL)
  }

}

export default new EmployeeService();