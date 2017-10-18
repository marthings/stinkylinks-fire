import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signup: function() {
      const name = this.get('name');
      const email = this.get('email');
      const password = this.get('password');

      var newUser = this.store.createRecord('user', {
        name: name,
        email: email,
        password: this.get('password')
      });
      newUser.save();

      this.get('session').open('firebase', {
        provider: 'password',
        email: email,
        password: password
      }).then(function(data) {
        console.log(data.currentUser);
      });

      this.transitionToRoute('application');
      
    }
  }
});
