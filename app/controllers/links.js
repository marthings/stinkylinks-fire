import Ember from 'ember';

export default Ember.Controller.extend({
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
