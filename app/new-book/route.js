import Ember from 'ember';

export default Ember.Route.extend({
  // flashMessages: Ember.inject.service(),

  actions: {
    createBook (data) {
      console.log(data);
      let book = this.get('store').createRecord('book', data);
      return book.save()
      .then(() => this.transitionTo('books'));
      // .then(() => this.get('flashMessages').success('New building added'))
      // .catch(() => {
      //   this.get('flashMessages')
      //   .danger('There was a problem. Please try again.');
      // });
    },

    goToCollection () {
      this.transitionTo('books');
    }
  }
});
