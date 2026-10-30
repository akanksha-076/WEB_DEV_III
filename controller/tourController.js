const mongoose = require('mongoose');
const tourModel = require('../model/tourModel');

const getAllTours = async (req, res) => {
  const tours = await tourModel.getAll();
  res.status(200).json(tours);
};

const getTourById = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: 'Invalid tour id' });
  }

  const tour = await tourModel.getById(req.params.id);
  if (!tour) {
    return res.status(404).json({ message: 'Tour not found' });
  }

  res.status(200).json(tour);
};

const createTour = async (req, res) => {
  const savedTour = await tourModel.create(req.body);
  res.status(201).json(savedTour);
};

const updateTour = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: 'Invalid tour id' });
  }

  const updatedTour = await tourModel.update(req.params.id, req.body);
  if (!updatedTour) {
    return res.status(404).json({ message: 'Tour not found' });
  }

  res.status(200).json(updatedTour);
};

const deleteTour = async (req, res) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({ message: 'Invalid tour id' });
  }

  const deletedTour = await tourModel.deleteById(req.params.id);
  if (!deletedTour) {
    return res.status(404).json({ message: 'Tour not found' });
  }

  res.status(200).json({ message: 'Tour deleted successfully' });
};

module.exports = { getAllTours, getTourById, createTour, updateTour, deleteTour };