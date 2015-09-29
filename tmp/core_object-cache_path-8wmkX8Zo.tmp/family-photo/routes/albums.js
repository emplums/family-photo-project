define('family-photo/routes/albums', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return [{
				name: "Christmas"
			}, {
				name: "Halloween"
			}, {
				name: "Thanksgiving"
			}];
		}
	});

});