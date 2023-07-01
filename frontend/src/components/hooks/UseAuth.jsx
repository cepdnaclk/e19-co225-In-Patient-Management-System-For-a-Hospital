import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const UseAuth = () => {
    return useContext(AuthContext);
}

export default UseAuth;