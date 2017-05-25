require.paths.unshift('./lib');

test = require('test'),
expect = require('expect');

exports["The panda eats bamboo"] = function() {
  expect.equal("Panda", "Bamboo", 'Does the Panda eat bamboo?');
};



test.run(exports);
