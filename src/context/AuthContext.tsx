import axios, { isAxiosError } from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
  Register(user: object): Promise<void>;
  Verify(token: string): Promise<boolean>;

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
      localStorage.setItem("token", response.data.token);
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          toast.error(error.response.data.message);
          console.log('error',error.response.data)
        } else if (error.request) {
          toast.error("Server failed to respond");
        }
        else{
          toast.error('Error sending request. try again')
        }
      }
    }
  };
  const Register = async (userData: object) => {
    try {
      const response = await axios.post(
        "https://adgereachtech-web-bn.onrender.com/user/register",
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
          toast.error("server failed to respond");
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
        `https://adgereachtech-web-bn.onrender.com/user/verify/${token}`
      );
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Register, Verify }}
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
