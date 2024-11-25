import React, { useState, useEffect } from "react";

const EditUserForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roles: "",
    status: "Active",
  });

  // Load user data when the component mounts or user changes
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        roles: user.roles.join(" "), // Convert array to comma-separated string
        status: user.status,
      });
    }
  }, [user]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...user,
      ...formData,
      roles: formData.roles.split(",").map((role) => role.trim()), // Convert string to array
    };
    onSave(updatedUser);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-user-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Roles</label>
        <input
          type="text"
          name="roles"
          value={formData.roles}
          onChange={handleChange}
          placeholder="Comma-separated roles (e.g., Admin, Editor)"
        />
      </div>
      <div className="form-group">
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn primary">
          Save
        </button>
        <button type="button" className="btn secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
