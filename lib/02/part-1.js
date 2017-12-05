module.exports = input => input
  .split(/\n/)
  .map(r => r.split(/\s/))
  .reduce((p, c) => p + (Math.max(...c) - Math.min(...c)), 0);
