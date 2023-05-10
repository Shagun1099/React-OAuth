import "./App.css";
import GoogleButton from "./components/GoogleButton";
import { googleLogout, GoogleOAuthProvider } from "@react-oauth/google";
import FacebookLogin from "react-facebook-login";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Profile from "./components/Profile";
import PhoneForm from "./components/PhoneForm";
import PaymentForm from "./components/PaymentForm";

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [phoneLogin, setPhoneLogin] = useState(false);

  useEffect(() => {
    if (accessToken) fetchDetails();
  }, [accessToken]);

  const fetchDetails = () => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err.message));
  };

  const logout = () => {
    if (accessToken) googleLogout();
    setUser(null);
    setAccessToken(null);
  };

  return (
    <div className="container">
      <GoogleOAuthProvider clientId="GOOGLE_CLIENT_ID">
        {user ? (
          <Profile user={user} logout={logout} />
        ) : (
          <>
            <GoogleButton setAccessToken={setAccessToken} />
            <FacebookLogin
              appId="FACEBOOK_APP_ID"
              fields="name,email,picture"
              callback={(data) => setUser(data)}
            />
            {phoneLogin ? (
              <PhoneForm />
            ) : (
              <button className="googleButton phoneButton" onClick={() => setPhoneLogin(true)}>Phone Login</button>
            )}
            <PaymentForm />
          </>
        )}
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
