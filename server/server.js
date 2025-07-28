require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const {
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  NODE_ENV,
  PORT
} = process.env;

const mongoURI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`;

mongoose.connect(mongoURI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const app = express();

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

if (NODE_ENV === 'development') {
  app.use(cors({ origin: 'http://localhost:3000' }));
}

// Routes
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

// Server
const port = PORT || 8000;
app.listen(port, () => {
  console.log(`🚀 API is running on port ${port} - ${NODE_ENV}`);
});
