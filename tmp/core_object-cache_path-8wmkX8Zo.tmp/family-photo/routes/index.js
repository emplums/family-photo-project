define('family-photo/routes/index', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return ['red', 'green', 'blue', 'pink'];
		}
	});

});