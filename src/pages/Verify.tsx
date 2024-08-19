import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FaCheckCircle, FaClock, FaTimesCircle } from "react-icons/fa";

const Verify: React.FC = () => {
  const { Verify } = useAuth();
  const [verificationStatus, setVerificationStatus] = useState<string | null>(
    null
  );
  const [verificationIcon, setVerificationIcon] = useState<React.ReactNode>(
    <FaClock style={{ color: "gray", marginRight: "8px" }} />
  );
  const currentURL = window.location.href;
  const token = currentURL.split("/").pop();
  const handleVerify = async (token: string) => {
    try {
      console.log("hello");
      const isVerified = await Verify(token);
      if (isVerified) {
        setVerificationIcon(
          <FaCheckCircle style={{ color: "green", marginRight: "8px" }} />
        );
        window.location.href = "/login";
        setVerificationStatus("User verified successfully");
      } else {
        setVerificationStatus("Failed to verify user");
        setVerificationIcon(
          <FaTimesCircle style={{ color: "red", marginRight: "8px" }} />
        );
      }
    } catch (error) {
      console.log(error);
      setVerificationStatus("Failed to verify user");
    }
  };

  useEffect(() => {
    if (token) {
      handleVerify(token);
    }
  }, [token]);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="text-black font-extrabold text-3xl flex flex-row  ">
        {verificationIcon}
        {verificationStatus ? verificationStatus : "Verifying..."}
      </div>
    </div>
  );
};

export default Verify;
