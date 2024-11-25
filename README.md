Here’s the updated **README.md** file including **login** and **logout** features:

---

# **RBAC UI Dashboard**

This project is a Role-Based Access Control (RBAC) UI built with React, styled with SCSS, and structured for modularity and scalability. It features user and role management, authentication (login/logout), and a clear folder structure for maintainability.

---

## **Folder Structure**

### **Root**

- **`App.js`**: Main component that renders the app layout, routing, sidebar, and authentication logic.
- **`index.js`**: Entry point of the application that renders the root React component.
- **`App.css` & `index.css`**: Global styles and layout definitions.
- **`styles.scss`**: Global SCSS styles for consistent theming.

---

### **`src/components/`**

This folder contains all reusable components organized by functionality.

#### **1. `RoleManagement/`**

- **`RoleList.js`**: Displays a list of roles.
- **`rolelist.scss`**: Contains SCSS styles specific to role-related components.

#### **2. `UserManagement/`**

- **`UserList.js`**: Displays a list of users.
- **`AddUserForm.js`**: Form component for adding new users.
- **`EditUserForm.js`**: Form component for editing existing users.
- **`userlist.scss`**: SCSS file containing styles for user-related components.

#### **3. `Shared/`**

- Reserved for reusable components such as modals, tables, or any common utilities.

---

### **`src/context/`**

- **`AuthContext.js`**: Manages user authentication, including login, logout, and role-based access.

---

### **`src/mock-api/`**

Contains mock data for simulating backend API responses.

- **`users.js`**: Mock user data.
- **`roles.js`**: Mock role data.
- **`permissions.js`**: Mock permissions data.

---

### **`src/styles/`**

- **`styles.scss`**: Central SCSS file for global styles, including imports for other SCSS files for consistent design.

---

### **`src/utils/`**

Utility functions and helpers.

- **`isActive`**: Utility for managing the active state for routing or UI logic.
- **Other utils**: Place additional helper functions here.

---

### **Authentication Features**

- **Login**:

  - Users (e.g., admin, regular user) can log in using the `Login` page.
  - Role-based access control ensures different navigation options based on user roles.
  - The role of the logged-in user is stored in localStorage and accessed globally through `AuthContext`.

- **Logout**:
  - A logout button is displayed in the sidebar with the role of the current user (e.g., "Logged in as Admin").
  - Clicking the logout button clears the user's session (localStorage) and redirects to the login page.
  - Sidebar navigation options are disabled when logged out.

---

### **Static Files**

- **`logo.svg`**: Placeholder for the application logo.

---

## **Usage**

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Run the application**:

   ```bash
   npm start
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

---

## **Features**

- **Role-Based Access Control**: Modularized UI for user and role management.
- **Authentication Context**: Login/logout functionality with role-specific access.
- **Dynamic Sidebar**:
  - Displays the role of the logged-in user.
  - Disables navigation when logged out.
- **SCSS Styling**: Modular styles for easy maintainability.

---

## **Future Improvements**

- Add reusable components (e.g., `Modal`, `Table`) under the `Shared/` directory.
- Integrate with a real backend API for authentication, role, and user management.
- Add unit tests for authentication and critical components.

---

Feel free to modify and expand this README based on your project's evolving requirements! 🚀
