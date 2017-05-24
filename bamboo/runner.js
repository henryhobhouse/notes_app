try {
  obj[testName]();
  this.passed += 1;
} catch (e) {
  if (e.name === 'AssertionError') {
    result.message = e.toString();
    logger.fail('Assertion failed in: ' + testName);
    showException(e);
    this.failed += 1;
  } else {
    logger.error('Error in: ' + testName);
    showException(e);
    this.errors += 1;
  }
}
