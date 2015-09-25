var util = require('util');
var VALID_LENGTH = 18;

function BadInputError(message) {
  'use strict';
  this.name = 'BAD_INPUT';
  this.message = message;
  Error.captureStackTrace(this, BadInputError);
}

util.inherits(BadInputError, Error);

var generateChecksum = function(input) {
  'use strict';
  var checksum = 0;
  var weights = [3,7,1];

  input.split('').forEach(function(number, index) {
    number = parseInt(number, 10);
    checksum += (number * weights[index % 3]) % 10;
  });

  return 10 - (checksum % 10);
};

module.exports = function(input) {
  'use strict';
  var checksum;

  if (typeof input !== 'string') {
    throw new BadInputError('input must be a string');
  }

  if (input.length !== VALID_LENGTH) return false;

  checksum = parseInt(input[input.length - 1], 10);
  input = input.substring(0, VALID_LENGTH - 1);

  return generateChecksum(input) === checksum;
};
