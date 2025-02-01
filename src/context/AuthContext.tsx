import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_BASE_URL } from "../config/BASE_API";

export interface user {
  _id: string;
  firstName:string;
  lastName: string;
  email: string
  password: string;
  location: string;
  status: string;
  role: string;
  gender: string;
  isVerified: boolean;
  createdAt: Date;
}
interface AuthContextData {
  signed: boolean;
  isLoading: boolean;
  loggedUser: user | null ;
  users: user[];
  Login(user: object): Promise<void>;
  Register(user: object): Promise<void>;
  Verify(token: string): Promise<boolean>;
  getUser(): Promise<void>;
  Logout(): void;
  getAllUsers(): Promise<void>;
}
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const AuthContextAPI: React.FC<AuthProviderProps> = ({ children }) => {
  const [loggedUser, setUser] = useState<user | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const Login = async (userData: object) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/user/login`,
        userData
      );
      localStorage.setItem("token", response.data.token);
      await getUser();
      toast.success(response.data.message);
      window.location.href = "/dashboard";
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.message);
          console.log("error", error.response.data);
        } else if (error.request) {
          toast.error("Server failed to respond");
        } else {
          toast.error("Error sending request. try again");
        }
      }
    }
  };
  const Register = async (userData: object) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/user/register`,
        userData
      );
      toast.success(response.data.message);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (Array.isArray(error.response.data.errors)) {
            error.response.data.errors.map((error: any) => {
              toast.error(error.msg);
            });
          } else {
            toast.error(error.response.data.msg);
          }
        } else if (error.request) {
          toast.error("failed to connect to server");
        } else {
          toast.error("failed to send request");
        }
      } else {
        toast.error("unexpected error");
      }
    }
  };
  const Verify = async (token: string) => {
    try {
      await axios.get(
        `${API_BASE_URL}/user/verify/${token}`
      );
      return true;
    } catch (error) {
      return false;
    }
  };
  const Logout = async () => {
    localStorage.removeItem("token");
    toast.success("loggedout");
    window.location.href = "/login";
  };

  const getUser = async () => {
    try {
      const token  = localStorage.getItem('token')
      setIsLoading(true);
      if(!token){
        window.location.href='/login'
        return
      }
      const response = await axios.get(
      `${API_BASE_URL}/user/me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.message);
        } else if (error.request) {
          toast.error("failed to connect to server");
        
        } else {
          toast.error("failed to send request");
        }
      } else {
        toast.error("unexpected error");
      }
      await Logout()
    } finally {
      setIsLoading(false);
    }
  };

  const getAllUsers = async () => {
    try {
      const token  = localStorage.getItem('token')
      const response = await axios.get(
        `${API_BASE_URL}/user`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUsers(response.data);
    } catch (error:any) {
      if(axios.isAxiosError(error)){
        if(error.response)
      {  console.log(error.response.data.message);
      }
      else if(error.request){
      console.log('server failed to reposnd')
      }
      else{
        console.log('error fetching users')
      }
    }else{
      console.log('unexpected error')
    }
  }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: Boolean(loggedUser),
        loggedUser,
        Login,
        Register,
        Verify,
        Logout,
        getUser,
        getAllUsers,
        isLoading,
        users
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default AuthContextAPI;
