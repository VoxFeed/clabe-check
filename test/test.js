var test = require('tape');
var clabeCheck = require('./../lib/clabe-check.js');

test('should throw BAD_INPUT if input is not a string', function(assert) {
  var input = 072320006405989616;
  var expected = 'BAD_INPUT';
  var actual;

  try {
    clabeCheck(input);
  } catch (error) {
    actual = error.name;
  }

  assert.equal(actual, expected, 'correct type of error');
  assert.end();
});

test('should return false if length is less than 18', function(assert) {
  var input = '012345678901234567';
  var expected = false;
  var actual = clabeCheck(input);

  assert.equal(actual, expected, 'short clabe is invalid');
  assert.end();
});

test('should return false if length is more than 18', function(assert) {
  var input = '01234567890123456789';
  var expected = false;
  var actual = clabeCheck(input);

  assert.equal(actual, expected, 'long clabe is invalid');
  assert.end();
});

test('should return false if clabe is invalid because of mismatched checksum', function(assert) {
  var input = '456812752034855892';
  var expected = false;
  var actual = clabeCheck(input);

  assert.equal(actual, expected, 'bad checksum');
  assert.end();
});

test('should return false if clabe is invalid because of mismatched 2nd number', function(assert) {
  var input = '426812752034855896';
  var expected = false;
  var actual = clabeCheck(input);

  assert.equal(actual, expected, 'bad checksum');
  assert.end();
});

test('should return true if clabe is valid', function(assert) {
  var input = '328000921510220225';
  var expected = true;
  var actual = clabeCheck(input);
  assert.equal(actual, expected, 'good clabe 1');

  input = '072320006405989616';
  expected = true;
  actual = clabeCheck(input);
  assert.equal(actual, expected, 'good clabe');

  assert.end();
});

test('should return true if clabe with checksum of 0 is valid', function(assert) {
  var input = '002010777777777770';  //valid: Banco Nacional de México (Aguascalientes)
  expected = true;
  actual = clabeCheck(input);
  assert.equal(actual, expected, 'good clabe');

  assert.end();
});
