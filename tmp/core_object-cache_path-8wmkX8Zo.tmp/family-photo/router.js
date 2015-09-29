define('family-photo/router', ['exports', 'ember', 'family-photo/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('users');
    this.route('albums');
  });

  exports['default'] = Router;

});