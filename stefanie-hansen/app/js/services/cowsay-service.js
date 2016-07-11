const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('cowsayService', function() {
    return function(message) {
      message = message || 'moo';
      return cowsay.say({
        text: message
      });
    };
  });
};
