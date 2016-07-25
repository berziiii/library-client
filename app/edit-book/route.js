import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
   return this.get('store').findRecord('book', params.id);
 },

 actions: {

   updateBook (data) {
     console.log('Updating Book...');
     this.get('store').findRecord('book', data.id)
     .then(function(book) {
       book.title = data.title;
       book.author = data.author;
       book.description = data.description;
       book.cover_img = data.cover_img;
       return book.save();
     })
     .then(() => this.transitionTo('books'));
   },

   goToCollection () {
     this.transitionTo('books');
   }
 }
});
