import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";
import React from 'react'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  Login(user: object): Promise<void>;
//   Logout(): void;
}
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthContextAPI:React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<object | null>(null)
     const Login = async (userData: object) => {
  try {
    const response = await axios.post(
      "https://adgereachtech-web-bn.onrender.com/user/login",
      userData

    );
    toast.success(response.data.message)
    
  } catch (error: any) {
   
     toast.error('invalid email or password')
  }
};


  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login }}>
      {children}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </AuthContext.Provider>
  );
}
export const useAuth = ()=>{
    const context = useContext(AuthContext)
    return context
}

export default AuthContextAPI


