import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
  Register(user: object): Promise<void>;
  //   Logout(): void;
}
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

const AuthContextAPI: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const Login = async (userData: object) => {
    try {
      const response = await axios.post(
        "https://adgereachtech-web-bn.onrender.com/user/login",
        userData
      );
      toast.success(response.data.message);
    } catch (error: any) {
      toast.error("invalid email or password");
    }
  };
  const Register = async (userData: object) => {
    try {
      const response = await axios.post(
        "https://adgereachtech-web-bn.onrender.com/user/register",
        userData
      );
      toast.success(response.data.message);
      console.log(response);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (Array.isArray(error.response.data.errors)) {
            error.response.data.errors.map((error:any)=>{
              toast.error(error.msg)
              console.log(error.msg);
            })
          } else {
            toast.error(error.response.data.msg);
          }
        } else if (error.request) {
          toast.error("server failed to respond");
        } else {
          toast.error("server sending request");
        }
      } else {
        toast.error("unexpected error");
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Register }}
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
