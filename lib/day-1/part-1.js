module.exports = input => (input + input[0])
  .match(/(\d)\1+/g)
  .reduce((p, c) => (c[0] * (c.length - 1)) + p, 0);
