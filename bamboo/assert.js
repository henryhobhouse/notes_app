var expect = exports;

function fail(message) {
  throw new AssertionError({
    "message": message
  });
}

expect.equal = function(actual, expected, message) {
  if (actual != expected)
  fail(actual, expected, message, '==', assert.equal);
};

expect.isTrue = function(assertion, message) {
  if (assertion !== true)
  fail(message || "") + "\nThis should be true innit." + "\nActual = " + assertion);
}

expect.isFalse = function(assertion, message) {
  if (assertion !== false)
  fail((message || "") + "\nThis should be false innit." +
  "\nActual = " + assertion);
}

expect.isNull = function(assertion, message) {
  if (assertion !== null)
  fail((message || "") + "\nExpected null innit." +
  "\nActual = " + assertion);
}

expect.throwsError = function(block, type, message) {
  var threw = false,
  exception = null;

  try {
    block();
  } catch (e) {
    threw = true;
    exception = e;
  }

  if (!threw)
  fail("Expected ERROR ERROR" + (message ? ": " + message : ""));

  if (type !== undefined && !(exception instanceof type))
  fail("Expected ERROR type '"+type+
  "', actually '"+exception+"'" + (message ? ": " + message : ""));
}

var AssertionError = exports.AssertionError = require("expect").AssertionError;

AssertionError.prototype = new Error();
