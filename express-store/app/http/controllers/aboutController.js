const Controller = require('./controller');

class AboutController extends Controller {
  getAbout(req, res) {
    res.render('about');
  }
}

module.exports = new AboutController();
