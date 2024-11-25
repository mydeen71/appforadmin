// Simulate an asynchronous API response
export const mockApi = (data, delay = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data);
      } else {
        reject(new Error("Data not found"));
      }
    }, delay);
  });
};

// Generalized CRUD operations for mock data
export const getMockData = (data) => {
  return mockApi(data);
};

export const createMockData = (dataList, newData) => {
  const updatedData = [...dataList, { ...newData, id: dataList.length + 1 }];
  return mockApi(updatedData);
};

export const updateMockData = (dataList, id, updatedFields) => {
  const updatedData = dataList.map((item) =>
    item.id === id ? { ...item, ...updatedFields } : item
  );
  return mockApi(updatedData);
};

export const deleteMockData = (dataList, id) => {
  const updatedData = dataList.filter((item) => item.id !== id);
  return mockApi(updatedData);
};
