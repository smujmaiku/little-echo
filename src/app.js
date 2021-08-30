const http = require('http');

const {
  PORT = 8000,
} = process.env;

let reqCount = 0;

/**
 * Main Function
 */
function main() {
  const server = http.createServer((req, res) => {
    const {url} = req;
    const ip = res.socket.remoteAddress;

    console.log(url);

    res.writeHead(200, {
      'Content-Type': 'text/plain',
      'X-IP': ip,
      'X-Global-Count': reqCount++,
    });
    res.end(url);
  });

  server.listen(PORT);
  console.log(`Listening on ${PORT}`);
}

if (require.main === module) {
  // Respect kubs signals
  process.on('SIGINT', () => process.exit());
  process.on('SIGTERM', () => process.exit());

  main();
}
