const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowsayService', function(message) {
    return cowsay.say({
      text: message
    });
  });
};
