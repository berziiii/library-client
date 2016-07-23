import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.get('store').findRecord('book', params.id);
 },

 actions: {

   goToCollection () {
      this.transitionTo('books');
    },

  }

});
