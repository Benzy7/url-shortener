const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serverConfig = require('./configs/server');
const databaseConfig = require('./configs/database');
const urlRoutes = require('./routes/urlRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Database connection
mongoose
  .connect(databaseConfig.uri)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', urlRoutes);

// Start server
app.listen(serverConfig.port, () => {
  console.log(`Server running at ${serverConfig.port}`);
});
