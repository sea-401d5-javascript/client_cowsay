module.exports = function(app) {
  app.controller('CowsayController', function(cowsayService) {
    this.cowPic = '';
    this.cowSay = function(message) {
      this.cowPic = cowsayService(message);
    };
  });
};
