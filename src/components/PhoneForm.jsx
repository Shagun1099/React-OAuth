import React, { useState } from "react";
import axios from "axios";

const PhoneForm = () => {
  const [phone, setPhone] = useState("");

  const getOtp = async () => {
    const { status } = await axios.get(
      `http://localhost:3001/otp?phone=${phone}`
    );

  };

  return (
    <>
      <input
        placeholder="+918236782777"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button className="googleButton" onClick={getOtp}>
        Get OTP
      </button>
    </>
  );
};

export default PhoneForm;
