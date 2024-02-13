const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const message = 'Hello, this is your Node.js server!';
        // Write the message to a file asynchronously
        fs.writeFile('FileSystem/output.txt', message, 'utf8', (err) => {
        if (err) {
        console.error(err); 
        res.end('Internal Server Error');
        return;
    } 
    res.end('File Content: ' + message);
    });
    }
});
const port = 3000;
server.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
