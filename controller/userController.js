const userModel = require("../model/userModel");

const getAllUsers = (req, res) => {
  const users = userModel.getAll();
  res.json(users);
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userModel.getById(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const createUser = (req, res) => {
  const savedUser = userModel.save(req.body);
  res.status(201).json(savedUser);
};

const updateUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const updated = userModel.update(id, req.body);
  if (updated) {
    res.status(200).json(updated);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = userModel.getById(id);
  if (user) {
    userModel.Delete(id);
    res.status(200).json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };