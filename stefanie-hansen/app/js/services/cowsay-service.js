const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('cowsayService', function() {
    return cowsay.say({
      text: 'sup'
    });
  });
};
