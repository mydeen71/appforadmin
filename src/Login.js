import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import "./styles/styles.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role) {
      login(role); // Pass the role during login
      navigate("/"); // Redirect to the dashboard
    } else {
      alert("Please select a role before logging in.");
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <div className="login-form">
        <label htmlFor="role" className="login-label">
          Role:
        </label>
        <select
          id="role"
          className="login-select"
          onChange={(e) => setRole(e.target.value)}
          value={role}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <button
          className={`login-button ${!role ? "disabled" : ""}`}
          onClick={handleLogin}
          disabled={!role}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
