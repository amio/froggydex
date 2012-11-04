define([
    'backbone',
    'text!views/nav.html'
], function( Backbone, navTemplate ) {

    var AppView = Backbone.View.extend({

        // Instead of generating a new element, bind to the existing skeleton of
        // the App already present in the HTML.
        tagName: 'div',
        id: 'nav',

        initialize: function() {
            this.render();
        },

        // Re-rendering the App just means refreshing the statistics -- the rest
        // of the app doesn't change.
        render: function() {
            this.$el.html(_.template(navTemplate));
            global.$cosmos.append(this.$el);
        }
    });

    return AppView;
});
