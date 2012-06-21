define(['ember', 'app/controllers/controller', 'text!app/templates/news_list.html'],

function (ember, listController, template) {

  var View = Ember.View.extend({
    // the controller is the initial context for the template
    controller: null,
    // template: Ember.Handlebars.compile("<h1>{{name}}</h1>toto")
    // template: Ember.Handlebars.compile("{{#each this.controller}}<li>{{ name }} - {{ author }} test</li>{{/each}}")
    // templateName: 'newsList-template'
    template: Ember.Handlebars.compile(template)
  });

  var myView = View.create({ controller: listController });

  // myView.appendTo('body');

  console.log(listController);
  return myView;
});