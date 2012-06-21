// Define libraries
require.config({
  baseUrl: 'js/',
  paths: {
    jquery : 'libs/jquery-1.6.1.min',
    ember  : 'libs/ember-0.9.8.1',
    text   : 'libs/require/text'
  }
});

// Load our app
define( 'app', [
  'jquery',
  'app/router/router',
  'ember'
  ], function( $, router) {
    var Exemple = Ember.Application.create({
      ready: function () {
        this.initialize();
        router.transitionTo('news.test');
        router.transitionTo('test');
      }
    });

    // Exemple.router = router;
    // Expose the application globally
    return window.Exemple = Exemple;
  }
);
