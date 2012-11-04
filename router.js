define([
    'backbone'
], function( Backbone ) {

    var AppRouter = Backbone.Router.extend({
        routes:{
            '#/picker/': 'picker'
        },

        picker: function( param ) {
            console.log(window.location.href);
        }
    });

    return AppRouter;
});