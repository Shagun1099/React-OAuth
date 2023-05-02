import { useGoogleLogin } from "@react-oauth/google";
import React from "react";

const GoogleButton = ({ setAccessToken }) => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setAccessToken(codeResponse.access_token),
    onError: (error) => console.log("Login Failed:", error),
  });
  return (
    <button className="googleButton" onClick={() => login()}>
      Google Login
    </button>
  );
};

export default GoogleButton;
