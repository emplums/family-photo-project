define('family-photo/routes/users', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({
		model: function model() {
			return [{
				name: "Emily Plummer",
				twitter: "@eplummer26"
			}, {
				name: "Tim Plummer",
				twitter: "@objelisks"
			}, {
				name: "Anne Plummer",
				twitter: "@anneplummer"
			}];
		}
	});

});