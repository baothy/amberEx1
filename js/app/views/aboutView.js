define(['ember', 'text!app/templates/about.html'],

function (ember, aboutTemplate) {

  var AboutView = Ember.View.extend({
        template: Ember.Handlebars.compile(aboutTemplate)
      });
  return AboutView;
});