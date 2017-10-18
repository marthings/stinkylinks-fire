import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  actions: {

    publishPost: function() {
      var newPost = this.store.createRecord('link', {
        title: this.get('title'),
        description: this.get('description'),
        timestamp: new Date().getTime()
      });
      newPost.save();
      this.transitionToRoute('application');
    }
  }
});
