const fs = require('fs');

const path = require('path');
const filePath = path.join(__dirname, '../data/user.json');

const getAll = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const getById = (id) => {
  const users = getAll();
  return users.find(user => user.id === id);
};

const save = (userData) => {
  const users = getAll();
  const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
  const newUser = { ...userData, id: newId };
  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users));
  return newUser;
};

const update = (id, updatedData) => {
  const users = getAll();
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedData };
    fs.writeFileSync(filePath, JSON.stringify(users));
    return users[index];
  }
  return null;
};

const Delete = (id) => {
  const users = getAll();
  const filteredUsers = users.filter(user => user.id !== id);
  fs.writeFileSync(filePath, JSON.stringify(filteredUsers));
};

module.exports = { getAll, getById, save, update, Delete };