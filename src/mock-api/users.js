// Mock data for users
let users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    role: "Viewer",
    status: "Active",
  },
];

// Get all users
export const getUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 500);
  });
};

// Add a new user
export const addUser = (user) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newUser = { ...user, id: users.length + 1 };
      users.push(newUser);
      resolve(newUser);
    }, 500);
  });
};

// Edit an existing user
export const editUser = (id, updatedUser) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      users = users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      );
      resolve(updatedUser);
    }, 500);
  });
};

// Delete a user
export const deleteUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      users = users.filter((user) => user.id !== id);
      resolve();
    }, 500);
  });
};
