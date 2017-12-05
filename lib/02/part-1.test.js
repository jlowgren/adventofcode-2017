const test = require('ava');
const { join } = require('path');
const { readFileSync } = require('fs');

const solve = require('./part-1');

test('should solve day 1, part 1', (t) => {
  const input = readFileSync(join(__dirname, 'input.dat'), 'utf8');
  const expected = 50376;
  t.is(solve(input), expected);
});
