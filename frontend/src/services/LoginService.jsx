import axios from "axios";

const LOGIN_API_BASE_URL = "http://localhost:9081/login";


class LoginService {
    login(user){
        return axios.post(LOGIN_API_BASE_URL, user);
    }
}

export default new LoginService();