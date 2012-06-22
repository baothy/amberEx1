// Define libraries
require.config({
  baseUrl: 'js/',
  paths: {
    jquery : 'libs/jquery-1.7.2.min',
    ember  : 'libs/ember',
    text   : 'libs/require/text'
  }
});

// Load our app
define( 'app', [
  'jquery',
  'app/router/router',
  'app/controllers/aboutController',
  'app/views/aboutView',
  'app/controllers/applicationController',
  'app/views/applicationView',
  'app/controllers/newsController',
  'app/views/newsView',
  'ember'
  ], function( $, router, aboutController, aboutView, applicationController, applicationView, newsController, newsView) {
    var App = Ember.Application.create({
      ready: function () {

        // your view variable names must end with *View

        // ApplicationController & ApplicationView are called by default by the router
        // which could be good for the header / footer / base template

        this.ApplicationController = applicationController;
        this.ApplicationView       = applicationView;

        this.AboutController       = aboutController;
        this.AboutView             = aboutView;

        this.NewsController       = newsController.Controller;
        this.NewsView             = newsView.View;

        this.Router                = router;

        this.initialize();
      }
    });

    // Expose the application globally
    // return window.Exemple = Exemple;
  }
);
