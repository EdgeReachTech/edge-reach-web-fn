import axios from "axios";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface Message {
  sender: string;
  receiver: string;
  content: string;
  timeStamp: Date;
  read: boolean;
}

interface MessageContextData {
  message: Message[] | null;
  getMessage: (token: string) => Promise<void>;
}

interface MessageProviderProps {
  children: ReactNode;
}

export const messageContext = createContext<MessageContextData>(
  {} as MessageContextData
);

const MessageContextAPI: React.FC<MessageProviderProps> = ({ children }) => {
  const [message, setMessage] = useState<Message[] | null>(null);

  const getMessage = async (token: string) => {
    try {
      const response = await axios.get<Message[]>(
        "https://edgereachtech.com/message/messages/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data);
    } catch (error) {
      console.log(error);
      setMessage(null);
    }
  };

  return (
    <messageContext.Provider value={{ message, getMessage }}>
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
