const Tour = require('./tour');

const getAll = () => Tour.find();
const getById = (id) => Tour.findById(id);
const create = (tourData) => Tour.create(tourData);
const update = (id, tourData) =>
  Tour.findByIdAndUpdate(id, tourData, {
    new: true,
    runValidators: true
  });
const deleteById = (id) => Tour.findByIdAndDelete(id);

module.exports = { getAll, getById, create, update, deleteById };