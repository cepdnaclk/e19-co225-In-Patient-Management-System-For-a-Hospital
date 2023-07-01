import axios from "axios";

const API_URL = "http://localhost:9081";


// class LoginService {
//     login(user){
//         return axios.post(LOGIN_API_BASE_URL, user);
//     }
// }

// export default new LoginService();




const login = (user) => {
  return axios
    .post(API_URL + "/login", 
     user
)
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem(response.data.id, JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = (id) => {
  localStorage.removeItem(id);
};



const LoginService = {
  signup,
  login,
  logout
  
};

export default LoginService;