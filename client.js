const net = require('net');
const name = 'Name: RR';
const connect = function (IP, PORT) {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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