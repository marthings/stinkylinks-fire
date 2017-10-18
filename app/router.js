import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('links');
  this.route('signup');
  this.route('private', { path: ':user_id' });
});

export default Router;
