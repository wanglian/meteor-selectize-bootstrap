Package.describe({
    name: "jeremy:selectize",
    summary: "Selectize is the hybrid of a textbox and <select> box that is useful for tagging, contact lists, country selectors, etc.",
    version: '0.1.0',
    git: 'https://github.com/jshimko/meteor-selectize.git'
});

Package.onUse(function(api) {

    api.versionsFrom("METEOR@0.9.0");

    api.use('jquery', 'client');

    api.addFiles([
        'selectize/dist/css/selectize.default.css',
        'selectize/dist/js/standalone/selectize.js'
    ], ['client']);

});
