const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('cowsayService', function() {
    return function(message) {
      return cowsay.say({
        text: message
      });
    };
  });
};
