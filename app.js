
require.config({
    paths: {
        text: 'lib/require/text',
        underscore: 'lib/underscore.min',
        backbone: 'lib/backbone.min',
        router: 'router',
        config: 'config',
        blender: 'lib/blender'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['underscore'],
            exports: 'Backbone'
        }
    }
});

require([
    'backbone',
    'views/nav',
    'router'
], function( Backbone, NavView, Router ) {
    // Initialize routing and start Backbone.history()
    new Router();
    Backbone.history.start();

    // Initialize the application view
    new NavView();
});