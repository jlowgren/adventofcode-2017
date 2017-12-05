const test = require('ava');
const { join } = require('path');
const { readFileSync } = require('fs');

const solvePart1 = require('./part-1');

test('should solve day 1, part 1', (t) => {
  const input = readFileSync(join(__dirname, 'input.dat'), 'utf8').trimRight();
  const expected = 1171;
  t.is(solvePart1(input), expected);
});
