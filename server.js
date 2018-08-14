const express = require('express');
const http = require('http');
const path = require('path');

const port = 3000;
const app = express();
app.use((req, res) => { res.sendFile(path.join(process.cwd(), '/app/index.html')); });
server = http.createServer(app);
server.listen(port, () => {
  console.log(` ** Listening on localhost:${port} **`);
});
