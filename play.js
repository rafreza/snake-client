const { connect } = require('./client');
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (key) => {
    process.stdout.write(key);
    if (key === '\u0003') {
      process.stdout.write('\n');
      process.exit();
    }
  });
  return stdin;
};
console.log('Connecting ...');
connect();
setupInput();