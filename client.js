const net = require('net');
const name = 'Name: RR';
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect', () => {

    console.log('Connection successfully established!');
    conn.write(name);        
  });

 
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}

module.exports = { connect };