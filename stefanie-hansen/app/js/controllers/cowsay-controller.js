const CowsayService = require('../services/cowsay');

module.exports = function(app) {
  app.controller('CowsayController', function(CowsayService) {
    this.message = '';
    this.cowsay = function(message) {
      return CowsayService(message);
    }
    this.cow = CowsayService(this.message);
  });
};
