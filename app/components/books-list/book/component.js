import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    delete () {
      this.sendAction('deleteBook', this.get('book'));
    },
  }
});
