import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Axios } from "axios";

const axiosSecure = Axios.create({
  baseURL: "http://localhost:5173",
});

const AxiosUse = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
      axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
  
      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (error.response && error.response.status === 403) {
            await logout();
            navigate("/login");
          }
          return Promise.reject(error);
        }
      )
    },
     [logout, navigate, axiosSecure]
    
    );
    return [axiosSecure];
};

export default AxiosUse;