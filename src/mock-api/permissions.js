// Mock data for permissions
const permissions = ["Read", "Write", "Delete"];

// Get all permissions
export const getPermissions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(permissions);
    }, 500);
  });
};

// Add a new permission (optional: for future extensibility)
export const addPermission = (permission) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!permissions.includes(permission)) {
        permissions.push(permission);
        resolve(permission);
      } else {
        resolve(null); // Permission already exists
      }
    }, 500);
  });
};

// Delete a permission (optional: for future extensibility)
export const deletePermission = (permission) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = permissions.indexOf(permission);
      if (index !== -1) {
        permissions.splice(index, 1);
        resolve();
      } else {
        resolve(null); // Permission not found
      }
    }, 500);
  });
};
