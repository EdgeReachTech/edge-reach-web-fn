import React from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  bgColor?: string; // Allow any background color
}

const Button: React.FC<ButtonProps> = ({ text, icon, bgColor = "bg-yellow-500" }) => {
  return (
    <button className={`${bgColor} flex items-center gap-2 text-white py-2 px-4 rounded-lg shadow`}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
