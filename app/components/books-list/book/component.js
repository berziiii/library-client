import Ember from 'ember';
export default Ember.Component.extend({


  actions: {
    delete() {
      this.get('book').destroyRecord()
      .then(() => {
         this.sendAction('goToCollection');
       });
    },

    // toggleUpdate() {
    //   this.$('input').focus();
    // },
  },
});
