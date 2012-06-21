define(['ember', 'app/controllers/controller', 'app/views/view'],

function (ember, controller, view) {

  var Router = Ember.Router.extend({
    root: Ember.State.extend({
      index: Ember.State.extend({
        // location: Ember.Location.create({style: 'hash'}),
        location: 'hash',
        enableLogging: true,
        route: '/',
        redirectsTo: 'news.index'
      }),
      news: Ember.State.extend({
        route    : '/news',
        // showPost : Ember.State.transitionTo('post'),
        test     : Ember.ViewState.extend({
                    route: '/test',
                    view: view.appendTo('body')
        }),
        index    : Ember.ViewState.extend({
                    route: '/',
                    view: null
        })
      })
    })
  });

  var router = Router.create({});
  return router;
});
