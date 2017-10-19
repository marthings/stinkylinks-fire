import Ember from 'ember';

export default Ember.Controller.extend({
  firebaseApp: Ember.inject.service(),
  actions: {
    signUp() {
      console.log('--> createEmailUser() firing');
      let store = this.get('store');
      let userEmail = this.get('email');  // from login form
      let userName = this.get('name');  // from login form
      let userPw = this.get('password');          // from login form
      let timeStamp = Date.now();
      let auth = this.get('firebaseApp').auth();
        auth.createUserWithEmailAndPassword(userEmail, userPw)
        .then((user) => {
          let userId  = user.uid;
          let newUser = store.createRecord('user', {
                              id: userId,
                              name: userName,
                              accountCreated: timeStamp,
                              lastLogin: timeStamp,
                              email: userEmail
                        });
          newUser.save()
                  .then(() => {
                    console.log('auth user');
                    this.get('session').open('firebase', { provider: 'password',
                                                           email: userEmail,
                                                           password: userPw })
                        .then(() => {
                          console.log('    transitionToRoute user');
                          this.transitionToRoute('/');
                        });
                   })
                  .catch(error => {
                    console.log(' -- createEmailUser save error:');
                    console.log(error.message);
                  });
        })
        .catch((error) => {
          console.log(' -- signIn error.message:');
          console.log(error.message);
        });
    }
  }
});