import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import AdminLayout from "./layouts/AdminLayout";
import FacultyLayout from "./layouts/FacultyLayout";
import AlumniLayout from "./layouts/AlumniLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageAlumni from "./pages/admin/ManageAlumni";
import ManageFaculty from "./pages/admin/ManageFaculty";
import SendEmails from "./pages/admin/SendEmails";
import AlumniList from "./pages/admin/AlumniList";
import FacultyList from "./pages/admin/FacultyList";
import AddAlumni from "./pages/admin/AddAlumni";
import AddFaculty from "./pages/admin/AddFaculty";
import FacultyDashboard from "./pages/faculty/FacultyDashboard";
import ViewAlumni from "./pages/faculty/ViewAlumni";
import CreateEvents from "./pages/faculty/CreateEvents";
import NotifyAlumni from "./pages/faculty/NotifyAlumni";
import FacultyProfile from "./pages/faculty/FacultyProfile";
import EditEvent from "./pages/faculty/EditEvent";
import AlumniDashboard from "./pages/alumni/AlumniDashboard";
import ViewEvents from "./pages/alumni/ViewEvents";
import ViewAlumniProfiles from "./pages/alumni/ViewAlumniProfiles";
import AlumniProfile from "./pages/alumni/AlumniProfile";
import Login from "./pages/Login";
import "./styles/shared.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Make login the default route */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          
          {/* Admin Routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/alumni-list" element={<AlumniList />} />
            <Route path="/faculty-list" element={<FacultyList />} />
            <Route path="/admin/add-alumni" element={<AddAlumni />} />
            <Route path="/admin/add-faculty" element={<AddFaculty />} />
            <Route path="/send-emails" element={<SendEmails />} />
          </Route>

          {/* Faculty Routes */}
          <Route element={<FacultyLayout />}>
            <Route path="/faculty" element={<FacultyDashboard />} />
            <Route path="/faculty/profile" element={<FacultyProfile />} />
            <Route path="/faculty/view-alumni" element={<ViewAlumni />} />
            <Route path="/faculty/create-events" element={<CreateEvents />} />
            <Route path="/faculty/notify-alumni" element={<NotifyAlumni />} />
            <Route path="/faculty/edit-event/:id" element={<EditEvent />} />
          </Route>

          {/* Alumni Routes */}
          <Route element={<AlumniLayout />}>
            <Route path="/alumni" element={<AlumniDashboard />} />
            <Route path="/alumni/profile" element={<AlumniProfile />} />
            <Route path="/alumni/view-events" element={<ViewEvents />} />
            <Route path="/alumni/view-alumni-profiles" element={<ViewAlumniProfiles />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
