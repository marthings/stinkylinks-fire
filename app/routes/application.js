import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service(), // (1)

  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  model: function() {
    return this.store.findAll('link');
  },

  actions:{
    login: function(provider) {
      this.get('session').open('firebase', {
        provider: provider
      }).then(function(data) {
        console.log(data.currentUser);
      });
    },

    logout: function() {
      this.get('session').close().then(function() {
        this.transitionTo('application');
      }.bind(this));
    }
  }
});