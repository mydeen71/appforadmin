import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import UserList from "./components/UserMangement/UserList";
import RoleList from "./components/RoleManagement/RoleList";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import { AuthContext } from "./context/AuthContext";
import "./styles/styles.scss";

const App = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout(); // Clear user state and localStorage
    window.location.href = "/login"; // Redirect to login
  };

  return (
    <Router>
      <div className="app">
        {/* Sidebar Navigation */}
        <nav className="sidebar">
          <h2 className="sidebar-title">RBAC Dashboard</h2>
          {user ? (
            <>
              <p className="user-role">
                Logged in as: <strong>{user.role}</strong>
              </p>
              <ul className="sidebar-menu">
                <li>
                  <NavLink
                    to="/users"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    User Management
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/roles"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Role Management
                  </NavLink>
                </li>
              </ul>
              <button onClick={handleLogout} className="btn logout">
                Logout
              </button>
            </>
          ) : (
            <p>Please log in to access the dashboard.</p>
          )}
        </nav>

        {/* Main Content */}
        <main className="content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/users"
              element={
                <ProtectedRoute>
                  <UserList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/roles"
              element={
                <ProtectedRoute>
                  <RoleList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <div>
                    <h1>Welcome to RBAC Dashboard</h1>
                    <p>Select an option from the sidebar to get started.</p>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
