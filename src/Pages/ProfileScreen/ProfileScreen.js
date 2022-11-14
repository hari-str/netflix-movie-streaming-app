import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import Navbar from "../../Components/Navbar/Navbar";
import "./ProfileScreen.css";

const ProfileScreen = () => {
  const user = useSelector(selectUser);

  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>

        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />

          <div className="profile__details">
            <h2>{user?.email}</h2>
            <div className="profile__plan">
              <h3>Plans</h3>

              {/* plan component */}

              <button className="profile__signout" onClick={logout}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
