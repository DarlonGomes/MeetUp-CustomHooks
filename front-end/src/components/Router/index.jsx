import React from "react";
import { Route, Routes } from "react-router-dom";
// import TimerPage from "../../pages/TimerPage";
import SignUp from "../../pages/SignUpPage";
import SignIn from "../../pages/SignInPage";
import Feed from "../../pages/FeedPage";

export default function RouterNavigator() {
  return (
    <Routes>
      {/* <Route path="/" element={<TimerPage />} /> */}
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/feed" element={<Feed />} />
    </Routes>
  );
}
