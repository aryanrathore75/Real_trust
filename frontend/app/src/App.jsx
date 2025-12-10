import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import AdminPage from "./pages/AdminPage";
import Login from "./Login";
import SignUp from "./SignUp";
import Homepage from "./Homepage";
import Subscriber from "./Subscriber";
import Footer from "./Footer";
import AdminButton from "./Adminbutton";

function App() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
      {!isAdminPage && <AdminButton />}
      {!isAdminPage && <Subscriber />}
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;
