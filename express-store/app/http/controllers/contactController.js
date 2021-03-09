const Controller = require('./controller');

class ContactController extends Controller {
  getContact(req, res) {
    res.render('contact');
  }
}

module.exports = new ContactController();
