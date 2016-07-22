import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.get('store').findRecord('book', params.id);
 },

 deleteBook() {
   this.deleteRecord()
   .then(() => this.transitionTo('Books'));
 }

});
