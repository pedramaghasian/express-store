const Controller = require('./controller');
const cars = require('app/models/carsInfo.json');

class HomeController extends Controller {
  getHome(req, res) {
    res.render('home', { cars });
  }
}

module.exports = new HomeController();
