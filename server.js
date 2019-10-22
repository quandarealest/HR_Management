const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Logger = require('./logger');
const rootRouter = require('./modules/routes');
const { Router } = express;

const port = process.env.PORT || 5000;
const app = express();
const mainRoute = new Router();
mainRoute.use('/api', rootRouter);
require('dotenv').config();

app.use(bodyParser.json());
app.use(mainRoute);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: process.env.DB_USERNAME,
    pass: process.env.DB_PASSWORD
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const db = mongoose.connection;

db.once('open', () => {
  Logger.info('[DB]: Established connection to database server.');
  Logger.info('[APP]: Starting server...');

  app.listen(port, (err) => {
    if(err) {
      return Logger.error(err.message);
    }

    Logger.appStarted(port, 'localhost');
  });
});

db.on('error', (err) => {
  Logger.error('[DB]: Unable to connect to database server');
  Logger.error(`${err.message}`);
  Logger.error('[APP]: Server has been stopped!');
})