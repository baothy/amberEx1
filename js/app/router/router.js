define(['ember', 'app/controllers/aboutController', 'app/views/aboutView', 'app/views/newsView'],

function (ember, aboutController, aboutView, newsView) {

  var Router = Ember.Router.extend({
    root: Ember.Route.extend({
      viewNews: Ember.State.transitionTo('news.index'),
      goToAbout: Ember.State.transitionTo('about'),
      goToShowPost: Ember.State.transitionTo('app.show'),

      index: Ember.Route.extend({
        route: '/',
        redirectsTo: "app.index"
      }),

      news: Ember.Route.extend({
        route: '/news',

        index: Ember.Route.extend({
          route: '/',
          connectOutlets: function(router, context) {
            // we call applicationController which has a tag {{content}}
            // which act as a placeHolder for the view we want to set in
             var newsController = router.get('applicationController');

             // 'about' here is the AboutView
             // newsController.connectOutlet('news', newsView.view.controller.content);
             newsController.connectOutlet({
              viewClass: newsView.View,
              // name: 'news',
              controller: newsView.view.controller.content,
              outletName: 'news'
            });
          }
        })
      }),

      app: Ember.Route.extend({
        route: '/app',

        index: Ember.Route.extend({
          route: '/',
          connectOutlets: function(router, context) {
            // we call applicationController which has a tag {{content}}
            // which act as a placeHolder for the view we want to set in
             var appController = router.get('applicationController');

             // 'about' here is the AboutView
             appController.connectOutlet('about');
          }
        })
      })

    })
  });

  return Router;
});
