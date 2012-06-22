define(['ember', 'app/controllers/NewsController', 'text!app/templates/news_list.html'],

function (ember, listController, template) {

  var View = Ember.View.extend({
    // the controller is the initial context for the template
     controller: null,
    // template: Ember.Handlebars.compile("<h1>{{name}}</h1>toto")
    // template: Ember.Handlebars.compile("{{#each this.controller}}<li>{{ name }} - {{ author }} test</li>{{/each}}")
    // templateName: 'newsList-template'
    template: Ember.Handlebars.compile(template)
  });

  var myView = View.create({ controller: listController.controller });

  console.log('View', View);
  // myView.appendTo('body');

  // we return 1 object with 2 properties:
  // the interface for the global object
  // the instance for the router
  return {
    View: View,
    view: myView
  };
});