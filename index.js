/* eslint-disable no-console */
// eslint-disable-next-line no-console
require('dotenv').config();
const mongoose = require('mongoose');
const { api, PORT } = require('./api');

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
)
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error connecting to database ', err));

api.listen(PORT, () => console.log(`Listening on ${PORT}`));
