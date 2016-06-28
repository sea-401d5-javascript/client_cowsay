module.exports = function(app) {
  app.controller('CowsayController', function(cowsayService) {
    this.cowPic = function(message) {
      this.cowPic = cowsayService(message);
    };
  });
};
