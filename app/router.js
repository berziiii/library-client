import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('books');
  this.route('book', { path: '/books/:id' });
  this.route('new-book');
  this.route('edit-book', { path: '/edit-book/:id' });
});

export default Router;
