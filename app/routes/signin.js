import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions:{
    signin: function(provider) {
      this.get('session').open('firebase', {
        provider: provider
      }).then(function(data) {
        console.log(data.currentUser);
      });
    }
  }
});