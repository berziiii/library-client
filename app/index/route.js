import Ember from 'ember';

export default Ember.Route.extend({
  goToCollection() {
    console.log('Done index');
    this.transitionToRoute('books');
  },
});
