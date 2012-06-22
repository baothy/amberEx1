define(['ember', 'text!app/templates/application.html'],

function (ember, applicationTemplate) {

  var ApplicationView = Ember.View.extend({
        // templateName: applicationTemplate
        template: Ember.Handlebars.compile(applicationTemplate)
      });
  return ApplicationView;
});
