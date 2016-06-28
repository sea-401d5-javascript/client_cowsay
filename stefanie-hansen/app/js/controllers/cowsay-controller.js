module.exports = function(app) {
  app.controller('CowsayController', ['CowsayService', function(CowsayService) {
    this.message = '';
    this.cowTalk = function(message) {
      CowsayService(message);
    };
  }]);
};
