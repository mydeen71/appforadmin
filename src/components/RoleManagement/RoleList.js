import React, { useState, useEffect } from "react";
import Table from "../Shared/Table";
import Modal from "../Shared/Modal";
import AddRoleForm from "./AddRoleForm";
import EditRoleForm from "./EditRoleForm";
// import RoleActions from "./RoleActions";
import "./rolelist.scss";

//
const RoleActions = ({ role, onEdit, onDelete }) => {
  return (
    <>
      <button className="btn primary" onClick={onEdit}>
        Edit
      </button>
      <button className="btn danger" onClick={onDelete}>
        Delete
      </button>
    </>
  );
};

const RoleList = () => {
  const [roles, setRoles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  console.log(roles);

  const fetchRoles = () => [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
    { id: 3, name: "Viewer", permissions: ["Read"] },
  ];

  useEffect(() => {
    setRoles(fetchRoles());
  }, []);

  const openModal = (role = null) => {
    setCurrentRole(role);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentRole(null);
  };

  const handleSave = (roleData) => {
    if (!roleData) {
      closeModal();
      return;
    }

    if (roleData.id) {
      setRoles((prevRoles) =>
        prevRoles.map((role) => (role.id === roleData.id ? roleData : role))
      );
    } else {
      setRoles((prevRoles) => [
        ...prevRoles,
        { ...roleData, id: prevRoles.length + 1 },
      ]);
    }
    closeModal();
  };

  const handleDelete = (roleId) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== roleId));
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Role Management</h1>
        <button className="btn primary" onClick={() => openModal()}>
          Add Role
        </button>
      </header>

      <Table
        columns={["Sl", "Name", "Permissions", "Actions"]}
        data={roles.map((role, index) => ({
          sl: index + 1, // Serial number
          name: role.name, // Role name
          permissions: role.permissions.join(", "), // Comma-separated permissions
          actions: (
            <RoleActions
              role={role}
              onEdit={() => openModal(role)}
              onDelete={() => handleDelete(role.id)}
            />
          ),
        }))}
      />

      <Modal
        title={currentRole ? "Edit Role" : "Add Role"}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        {currentRole ? (
          <EditRoleForm role={currentRole} onSave={handleSave} />
        ) : (
          <AddRoleForm onSave={handleSave} />
        )}
      </Modal>
    </div>
  );
};

export default RoleList;
