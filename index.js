require('dotenv').config();

const express = require('express');
const connectDB = require('./server');
const tourRouter = require('./router/tourRouter');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/tours', tourRouter);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  if (err.name === 'ValidationError' || err.name === 'CastError') {
    return res.status(400).json({ message: err.message });
  }

  if (err.code === 11000) {
    return res.status(409).json({ message: 'A tour with that value already exists' });
  }

  const status = err.status || err.statusCode || 500;
  if (status >= 500) {
    console.error(err);
  }
  res.status(status).json({
    message: status >= 500 ? 'Internal server error' : err.message
  });
});

async function startServer() {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Unable to start the server:', err);
    process.exitCode = 1;
  }
}

startServer();