(function(global) {
  var expect = {};

  expect.expectionError = function expectionError(options) {
    this.name = 'expectionError';
    this.message = options.message;
    this.actual = options.actual;
    this.expected = options.expected;
    this.operator = options.operator;
    var stackStartFunction = options.stackStartFunction || fail;
  };

  expect.expectionError.prototype.summary = function() {
    return this.name + (this.message ? ': ' + this.message : '');
  };

  expect.expectionError.prototype.details = function() {
    return 'In "' + this.operator + '":\n\tExpected: ' + this.expected + '\n\tFound: ' + this.actual;
  };

  expect.expectionError.prototype.toString = function() {
    return this.summary() + '\n' + this.details();
  };

  function fail(actual, expected, message, operator, stackStartFunction) {
    throw new expect.expectionError({
      message: message,
      actual: actual,
      expected: expected,
      operator: operator,
      stackStartFunction: stackStartFunction
    });
  }

  expect.fail = fail;

  expect.ok = function(value, message) {
    if (!value)
      fail(value, true, message, '==', expect.ok);
  };

  expect.equal = function(actual, expected, message) {
    if (actual != expected)
      fail(actual, expected, message, '==', expect.equal);
  };

  expect.notEqual = function(actual, expected, message) {
    if (actual == expected)
      fail(actual, expected, message, '!=', expect.equal);
  };

  expect.isTrue = function(assertion, message) {
      if (assertion !== true)
          fail((message || "") + "\nExpected true." +
              "\nActual = " + assertion, expect.isTrue);
  };

  expect.isFalse = function(assertion, message) {
    if (assertion !== false)
        fail((message || "") + "\nExpected false." +
            "\nActual = " + assertion, expect.isFalse);
};

  expect.throws = function(block, error, message) {
    throws.apply(this, [true].concat(Array.prototype.slice.call(arguments)));
  };

  expect.doesNotThrow = function(block, error, message) {
    throws.apply(this, [false].concat(Array.prototype.slice.call(arguments)));
  };

  function throws(expected, block, error, message) {
    var exception,
        actual,
        actual = false,
        operator = expected ? 'throws' : 'doesNotThrow';
        callee = expected ? expect.throws : expect.doesNotThrow;

    if (typeof error === 'string' && !message) {
      message = error;
      error = null;
    }

    message = message || '';

    try {
      block();
    } catch (e) {
      actual = true;
      exception = e;
    }

    if (expected && !actual) {
      fail((exception || Error), (error || Error), 'Exception was not thrown\n' + message, operator, callee);
    } else if (!expected && actual) {
      fail((exception || Error), null, 'Unexpected exception was thrown\n' + message, operator, callee);
    } else if (expected && actual && error && exception.constructor != error) {
      fail((exception || Error), null, 'Unexpected exception was thrown\n' + message, operator, callee);
    }
  };

  global.expect = expect;
})(typeof window === 'undefined' ? this : window);
