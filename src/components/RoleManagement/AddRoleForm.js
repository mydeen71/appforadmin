import React, { useState } from "react";
// import "../../styles/styles.scss";
const AddRoleForm = ({ onSave }) => {
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      onSave({ name, permissions });
    }
  };

  const togglePermission = (permission) => {
    setPermissions((prevPermissions) =>
      prevPermissions.includes(permission)
        ? prevPermissions.filter((p) => p !== permission)
        : [...prevPermissions, permission]
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Role Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Permissions</label>
        <div className="checkbox-group">
          {["Read", "Write", "Delete"].map((perm) => (
            <label key={perm}>
              <input
                type="checkbox"
                checked={permissions.includes(perm)}
                onChange={() => togglePermission(perm)}
              />
              {perm}
            </label>
          ))}
        </div>
      </div>
      <div className="form-actions">
        <button type="submit" className="btn primary">
          Save
        </button>
        <button
          type="button"
          className="btn secondary"
          onClick={() => onSave(null)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddRoleForm;
