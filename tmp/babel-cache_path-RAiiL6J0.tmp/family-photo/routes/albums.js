import Ember from 'ember';

export default Ember.Route.extend({
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