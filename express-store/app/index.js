const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

class Application {
  constructor() {
    this.setupExpressServer();
    this.setConfigModules();
    this.setRoutes();
  }

  setupExpressServer() {
    app.listen(3000, () => console.log('listen to port 3000'));
  }

  setConfigModules() {
    app.use(express.static('public'));
    app.set('view engine', 'ejs');
    app.set('views', path.resolve('./resource/views'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
  }

  setRoutes() {
    app.use(require('./routes/web'));
  }
}

module.exports = Application;
