// Mock data for roles
let roles = [
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Read', 'Write'] },
    { id: 3, name: 'Viewer', permissions: ['Read'] },
  ];
  
  // Get all roles
  export const getRoles = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(roles);
      }, 500);
    });
  };
  
  // Add a new role
  export const addRole = (role) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newRole = { ...role, id: roles.length + 1 };
        roles.push(newRole);
        resolve(newRole);
      }, 500);
    });
  };
  
  // Edit an existing role
  export const editRole = (id, updatedRole) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        roles = roles.map((role) => (role.id === id ? { ...role, ...updatedRole } : role));
        resolve(updatedRole);
      }, 500);
    });
  };
  
  // Delete a role
  export const deleteRole = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        roles = roles.filter((role) => role.id !== id);
        resolve();
      }, 500);
    });
  };
  