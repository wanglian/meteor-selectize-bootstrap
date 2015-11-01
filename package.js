Package.describe({
  name: "jamiecollinson:selectize-bootstrap",
  summary: "Selectize v0.12.1 is a hybrid of a textbox and <select> element used for tagging, contact lists, and more. This version includes bootstrap 3 styles.",
  version: '0.12.1',
  git: 'https://github.com/jamiecollinson/meteor-selectize.git'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@0.9.3");

  api.use('jquery', 'client');

  api.addFiles([
    'selectize/dist/css/selectize.bootstrap3.css',
    'selectize/dist/js/standalone/selectize.js'
  ], ['client']);

});
