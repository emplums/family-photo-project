/* jshint ignore:start */

define('family-photo/config/environment', ['ember'], function(Ember) {
  var prefix = 'family-photo';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("family-photo/tests/test-helper");
} else {
  require("family-photo/app")["default"].create({"name":"family-photo","version":"0.0.0+516c632c"});
}

/* jshint ignore:end */
