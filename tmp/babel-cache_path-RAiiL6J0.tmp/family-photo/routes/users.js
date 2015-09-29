import Ember from 'ember';

export default Ember.Route.extend({
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