module.exports = function(app) {
  app.controller('CowsayController', function(cowsayService) {
    this.message = '';
    this.cowPic = cowsayService;
  });
};
