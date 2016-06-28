const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowsayService', function() {
    this.cow = cowsay.say({
      text: message
    });
    return this.cow;
  });
};
