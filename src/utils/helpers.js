// Capitalize the first letter of a string
export const capitalize = (str) => {
  if (typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// Validate email format
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Filter data by a search term
export const filterData = (data, searchTerm, keys) => {
  if (!searchTerm) return data;

  const lowercasedTerm = searchTerm.toLowerCase();
  return data.filter((item) =>
    keys.some((key) => item[key].toLowerCase().includes(lowercasedTerm))
  );
};

// Sort data by a specific key
export const sortData = (data, key, ascending = true) => {
  return data.sort((a, b) => {
    if (a[key] < b[key]) return ascending ? -1 : 1;
    if (a[key] > b[key]) return ascending ? 1 : -1;
    return 0;
  });
};

// Debounce function for limiting API calls or events
export const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

// Get unique values from an array of objects by key
export const getUniqueValues = (data, key) => {
  return [...new Set(data.map((item) => item[key]))];
};
