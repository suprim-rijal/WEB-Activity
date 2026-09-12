const tourModel = require('../models/tourModel');

exports.getAllTours = (req, res) => {
  const tours = tourModel.getAllToursData();
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours }
  });
};

exports.createTour = (req, res) => {
  const tours = tourModel.getAllToursData();
  const newId = tours.length > 0 ? tours[tours.length - 1].id + 1 : 1;
  const newTour = Object.assign({ id: newId }, req.body);
  
  tours.push(newTour);
  tourModel.saveToursData(tours);

  // 201 Created Status Code (Step 2)
  res.status(201).json({
    status: 'success',
    data: { tour: newTour }
  });
};

exports.deleteTour = (req, res) => {
  const tours = tourModel.getAllToursData();
  const id = parseInt(req.params.id);
  const updatedTours = tours.filter(t => t.id !== id);

  if (tours.length === updatedTours.length) {
    return res.status(404).json({ status: 'fail', message: 'Tour not found' });
  }

  tourModel.saveToursData(updatedTours);

  // 204 No Content Status Code (Step 2)
  res.status(204).send();
};