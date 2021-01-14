let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  const handleUserInput = stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.stdout.write('\n');
      process.exit();
    }
    while (key === 'w') {
      conn.write('Move: up');
    }
    while (key === 'a') {
      conn.write('Move: left');
    }
    while (key === 's') {
      conn.write('Move: down');
    }
    while (key === 'd') {
      conn.write('Move: right');
    }
    if (key === 'r') {
      conn.write('Say: Yoo');
    }
  });
  return stdin;
};

module.exports = { setupInput }