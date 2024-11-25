import React, { useState } from "react";

const AddUserForm = ({ onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    roles: "",
    status: "Active",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      roles: formData.roles.split(",").map((role) => role.trim()), // Convert string to array
    };
    onSave(newUser); // Trigger save callback
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter user name"
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
          placeholder="Enter user email"
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
          Add User
        </button>
        <button type="button" className="btn secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;
