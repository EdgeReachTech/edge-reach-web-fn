import React from "react";

interface CardProps {
  title: string;
  count?: number;
  description?: React.ReactNode;
  button?: string;
  icon?: React.ReactNode;
  backgroundColor?: string; // Custom background color
  textColor?: string; // Text color for the title
  iconPosition?: "inline" | "above"; // Position of the icon (inline or above)
}

const Card: React.FC<CardProps> = ({
  title,
  count,
  description,
  button,
  icon,
  backgroundColor = "bg-gray-200",
  textColor = "text-white",
  iconPosition = "inline", // Default position is inline
}) => {
  return (
    <div className={`p-4 rounded-lg shadow-lg flex flex-col ${backgroundColor}`}>
      <div className="text-3xl font-bold mb-4 mx-auto text-red-500">{count}</div>
      <div
        className={`flex ${iconPosition === "above" ? "flex-col items-center" : "justify-center items-center"} mb-4`}
      >
        {icon && <div className="text-xl">{icon}</div>}
        <h3 className={`text-lg font-bold ${textColor}`}>{title}</h3>
      </div>
      <div className="text-sm mb-4 text-black">{description}</div>
      {button && (
        <button className="bg-yellow-500 text-white py-1 px-4 rounded-md">
          {button}
        </button>
      )}
    </div>
  );
};

export default Card;
