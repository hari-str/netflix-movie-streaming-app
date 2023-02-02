import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import HomeScreen from "./Pages/HomeScreen/HomeScreen";
import LoginScreen from "./Pages/LoginScreen/LoginScreen";
import ProfileScreen from "./Pages/ProfileScreen/ProfileScreen";
import MovieScreen from "./Pages/MovieScreen/MovieScreen";
import WatchScreen from "./Pages/WatchScreen/WatchScreen";

import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const App = () => {
  const user = useSelector(selectUser);

  // console.log(user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/:mediaType/:id" element={<MovieScreen />} />
            <Route path="/watch/:mediaType/:id" element={<WatchScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
