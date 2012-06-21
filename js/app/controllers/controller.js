
define(['ember', 'app/models/model'],

function (ember, model) {

  var listController = Ember.ArrayController.create({
     content: [],
     getNews: function () {
      var self = this;
      $.get('json/news.json', function(data) {
        // self.set('content', data);
        self.pushObjects(data);
      });

      // this.addNew({name: 'test', author: 'test', title: 'tutu'});
     },
     addNew: function (newsModel) {
      this.pushObject(newsModel);
     },
     refresh: function () {
      return this.content;
     }
  });

  listController.getNews();

  return listController;
});
