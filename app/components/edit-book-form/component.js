import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  // classNames: ['form-horizontal'],
  // auth: Ember.inject.service(),

 book: {},

 actions: {
   update () {
     this.sendAction('updateBook', this.get('book'));
   },

   reset () {
     this.set('book', {});
     this.sendAction('goToCollection');
   },
 },
});
