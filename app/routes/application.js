import Ember from 'ember';
export default Ember.Route.extend({
  session: Ember.inject.service(), // (1)

  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  sortProperties: ['timestamp'],
  sortAscending: false, // sorts post by timestamp
  
  model: function() {
    return this.store.findAll('link');
  },

  actions:{
    logout: function() {
      this.get('session').close().then(function() {
        this.transitionTo('application');
      }.bind(this));
    }
  }
});