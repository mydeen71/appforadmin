import React, { useState, useEffect } from "react";
import { mockApi } from "../../utils/api";
import Table from "../Shared/Table";
import Modal from "../Shared/Modal";
import EditUserForm from "./EditUserForm";
import AddUserForm from "./AddUserForm";
import "./userlist.scss";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(users);
  // Fetch users
  useEffect(() => {
    mockApi([
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        roles: ["Admin"],
        status: "Active",
      },
      {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        roles: ["Editor"],
        status: "Inactive",
      },
    ]).then(setUsers);
  }, []);

  // Open modal for editing
  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Save user changes
  const handleSave = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>User Management</h1>
        <button className="btn primary" onClick={() => setIsModalOpen(true)}>
          Add User
        </button>
      </header>
      <Table
        columns={["Sl", "Name", "Email", "Roles", "Status", "Actions"]}
        data={users.map((user) => ({
          ...user,
          roles: user.roles.join(" "),
          actions: (
            <>
              <button className="btn primary" onClick={() => handleEdit(user)}>
                Edit
              </button>
              <button
                className="btn danger"
                onClick={() =>
                  setUsers((prevUsers) =>
                    prevUsers.filter((u) => u.id !== user.id)
                  )
                }
              >
                Delete
              </button>
            </>
          ),
        }))}
      />
      <Modal
        title={selectedUser ? "Edit User" : "Add User"}
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        {selectedUser ? (
          <EditUserForm
            user={selectedUser}
            onSave={handleSave}
            onCancel={closeModal}
          />
        ) : (
          <AddUserForm
            onSave={(newUser) => {
              setUsers((prevUsers) => [
                ...prevUsers,
                { ...newUser, id: prevUsers.length + 1 },
              ]);
              closeModal();
            }}
            onCancel={closeModal}
          />
        )}
      </Modal>
    </div>
  );
};

export default UserList;
