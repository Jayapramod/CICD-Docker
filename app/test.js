const http = require('http');

function test(path, expected, callback) {
  http.get(`http://localhost:3000${path}`, res => {
    let data = '';
    res.on('data', chunk => (data += chunk));
    res.on('end', () => {
      if (data.includes(expected)) {
        console.log(`✅ Test passed for ${path}`);
        callback(true);
      } else {
        console.error(`❌ Test failed for ${path}`);
        callback(false);
      }
    });
  }).on('error', err => {
    console.error(`❌ Error testing ${path}: ${err.message}`);
    callback(false);
  });
}

test('/', 'Hello', r1 => {
  test('/healthz', 'ok', r2 => process.exit(r1 && r2 ? 0 : 1));
});