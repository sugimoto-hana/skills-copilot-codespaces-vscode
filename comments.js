// Create web server
// 1. Import the http module
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const port = 3000;

// 2. Create a server
const server = http.createServer((req, res) => {
    // 3. Handle request
    const parsedUrl = url.parse(req.url, true);
    const filePath = `.${parsedUrl.pathname}`;
    const extname = path.extname(filePath);
    const contentType = 'text/html';

    // 4. Read file
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': contentType });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf-8');
        }
    });
});

// 5. Start server
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// 6. End
// Run node comments.js
// Open browser and go to http://localhost:3000/index.html
// You will see the content of index.html
// Try to go to http://localhost:3000/about.html
// You will see the content of about.html
// Try to go to http://localhost:3000/404.html
// You will see 404 Not Found
// Press Ctrl + C to stop server