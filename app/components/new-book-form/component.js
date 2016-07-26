import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['form'],
  // classNames: ['form-horizontal'],
  // auth: Ember.inject.service(),

 book: {},

 actions: {
   submit () {
     this.sendAction('createBook', this.get('book'));
   },

   reset () {
     this.set('book', {});
     this.sendAction('goToCollection');
   },
 },
});
