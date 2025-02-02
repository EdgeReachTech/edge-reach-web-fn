import axios from "axios";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { API_BASE_URL } from "../config/BASE_API";

interface Message {
  createdAt: string | number | Date;
  _id:string
  sender: string;
  receiver: string;
  content: string;
  timeStamp: Date;
  read: boolean;
}

interface MessageContextData {
  message: Message[];
  getMessage: () => Promise<void>;
  sendMessage: (content:string,receiver:string) => Promise<void>;
  
}

interface MessageProviderProps {
  children: ReactNode;
}

export const messageContext = createContext<MessageContextData>(
  {} as MessageContextData
);

const MessageContextAPI: React.FC<MessageProviderProps> = ({ children }) => {
  const [message, setMessage] = useState<Message[] >([]);

  const getMessage = async () => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.get<Message[]>(
        `${API_BASE_URL}/message/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data);
    } catch (error) {
    
      setMessage([]);
      throw error
    }
  };
  const sendMessage = async (content:string,receiver:string) => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.post<Message[]>(
        `${API_BASE_URL}/message/${receiver}`,
        {content},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getMessage()
      // setMessage(response.data);
    } catch (error) {
    
      setMessage([]);
      throw error
    }
  };

  return (
    <messageContext.Provider value={{ message, getMessage,sendMessage }}>
      {children}
    </messageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(messageContext);
  if (!context) {
    throw new Error("useMessage must be used within a MessageProvider");
  }
  return context;
};

export default MessageContextAPI;
