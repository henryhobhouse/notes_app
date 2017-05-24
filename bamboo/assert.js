var assert = exports;

function fail(message) {
throw new 

}
assert.equal = function(actual, expected, message) {
  if (actual != expected)
    fail(actual, expected, message, '==', assert.equal);
};
