import axios from "axios";


const PATIENT_API_BASE_URL = "http://localhost:9081/patient/";
class PatientService {
  getData(nic) {
    return axios.get(PATIENT_API_BASE_URL+nic);
  }
  
}

export default new PatientService();