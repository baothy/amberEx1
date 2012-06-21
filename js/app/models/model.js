define(['ember'],

  function (ember) {

  var person = Ember.Object.create({
    name    : 'bao',
    surname : 'nguyen'
  });

  var appInfo = Ember.Object.create({
    name        : 'Ember Js App',
    title       : 'my first Ember Js app',
    description : 'this is my first Ember js App',
    author      : 'Bao nguyen',
    logo        : 'http://labanquise.com/images/poutine-canada.jpg'
  });

  var news = Ember.Object.create({
    name        : 'Ember Js App',
    title       : 'my first Ember Js app',
    description : 'this is my first Ember js App',
    author      : 'Bao nguyen'
  });

  return {
    Person  : person,
    AppInfo : appInfo,
    News    : news
  };
});

