Package.describe({
  name: "jamiecollinson:selectize-bootstrap",
  summary: "Selectize v0.13.6 is a hybrid of a textbox and <select> element used for tagging, contact lists, etc",
  version: '0.13.6',
  git: 'https://github.com/wanglian/meteor-selectize-bootstrap.git'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@0.9.3");

  api.use('jquery', 'client');

  api.addFiles([
    'selectize/dist/css/selectize.bootstrap3.css',
    'selectize/dist/js/standalone/selectize.js'
  ], ['client']);

});
