import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  actions: {
       signUp: function(){
         var controller = this.get('controller');
         var firstName = controller.get('firstName');
         var lastName = controller.get('lastName');
         var email = controller.get('email');
         var password = controller.get('password');
 
     
           this.get('session').open('firebase', {
             provider: 'password',
             'email': email,
             'password': password
           }).then(function(){
             var user = this.store.createRecord('user', {
               id: userData.uid,
               firstName: firstName,
               lastName: lastName
             });
             user.save()
             .then(function(){
               this.transitionTo('protected');
             });
           });
         }
        }
  
});