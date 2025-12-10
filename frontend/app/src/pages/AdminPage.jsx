import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import Dashboard from "../components/Dashboard";
import AddClient from "../components/AddClient";
import AddProject from "../components/Addproject";
import AdminRoute from "../components/AdminRoute";

export default function AdminPage() {
  return (
    <div>
      <AdminNavbar />
      <div className="p-4">
        <Routes>
          <Route
            path="dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path="add-project"
            element={
              <AdminRoute>
                <AddProject />
              </AdminRoute>
            }
          />
          <Route
            path="add-client"
            element={
              <AdminRoute>
                <AddClient />
              </AdminRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
