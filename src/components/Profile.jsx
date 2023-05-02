import React from "react";

const Profile = ({ user, logout }) => {
  return (
    <div className="profile">
      <img src={user?.picture?.data?.url || user?.picture} alt="profile" />
      <p>
        <b>Name: </b>
        {user.name}
      </p>
      <p>
        <b>Email: </b>
        {user.email}
      </p>
      <p>
        <b>Id: </b>
        {user.id}
      </p>
      <p>
        <b>Language: </b>
        {user.locale || user?.graphDomain}
      </p>
      <button onClick={logout} className="logout">
        Logout
      </button>
    </div>
  );
};

export default Profile;
